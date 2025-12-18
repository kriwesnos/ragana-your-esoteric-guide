import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram configuration');
      throw new Error('Telegram not configured');
    }

    const { name, phone, email, service, message, language } = await req.json();

    console.log('Received form submission:', { name, phone, email, service, language });

    // Format message for Telegram
    const telegramMessage = language === 'lv'
      ? `🌙 *Jauns pieteikums no Ragana.lv*

👤 *Vārds:* ${name}
📞 *Tālrunis:* ${phone}
📧 *E-pasts:* ${email}
✨ *Pakalpojums:* ${service}
${message ? `💬 *Ziņojums:* ${message}` : ''}

📅 *Datums:* ${new Date().toLocaleString('lv-LV')}`
      : `🌙 *Новая заявка с Ragana.lv*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email}
✨ *Услуга:* ${service}
${message ? `💬 *Сообщение:* ${message}` : ''}

📅 *Дата:* ${new Date().toLocaleString('ru-RU')}`;

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    const telegramResult = await telegramResponse.json();
    console.log('Telegram response:', telegramResult);

    if (!telegramResult.ok) {
      throw new Error(`Telegram error: ${telegramResult.description}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in send-to-telegram function:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
