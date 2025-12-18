import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Минимум 2 символа').max(100),
  phone: z.string().trim().min(6, 'Введите номер телефона').max(20),
  email: z.string().trim().email('Введите корректный email').max(255),
  service: z.string().min(1, 'Выберите услугу'),
  message: z.string().trim().max(1000).optional(),
});

export function ContactForm() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const services = [
    { value: 'tarot', label: t('services.tarot.title') },
    { value: 'energy', label: t('services.energy.title') },
    { value: 'rituals', label: t('services.rituals.title') },
    { value: 'runes', label: t('services.runes.title') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: language === 'ru' ? 'Ошибка валидации' : 'Validācijas kļūda',
          description: error.errors[0].message,
          variant: 'destructive',
        });
        return;
      }
    }

    setIsLoading(true);

    try {
      const serviceName = services.find(s => s.value === formData.service)?.label || formData.service;
      
      const { error } = await supabase.functions.invoke('send-to-telegram', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: serviceName,
          message: formData.message,
          language,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      
      toast({
        title: t('contact.success'),
        description: language === 'ru' 
          ? 'Мы свяжемся с вами в ближайшее время' 
          : 'Mēs ar jums sazināsimies tuvākajā laikā',
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: language === 'ru' 
          ? 'Пожалуйста, попробуйте позже' 
          : 'Lūdzu, mēģiniet vēlāk',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Input
            placeholder={t('contact.name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder={t('contact.phone')}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
      </div>

      <Input
        type="email"
        placeholder={t('contact.email')}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="h-12 bg-background border-border focus:border-primary"
      />

      <Select
        value={formData.service}
        onValueChange={(value) => setFormData({ ...formData, service: value })}
        required
      >
        <SelectTrigger className="h-12 bg-background border-border focus:border-primary">
          <SelectValue placeholder={t('contact.service')} />
        </SelectTrigger>
        <SelectContent>
          {services.map((service) => (
            <SelectItem key={service.value} value={service.value}>
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Textarea
        placeholder={t('contact.message')}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="min-h-[120px] bg-background border-border focus:border-primary resize-none"
      />

      <Button
        type="submit"
        disabled={isLoading || isSuccess}
        className="w-full h-12 text-base font-medium"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {language === 'ru' ? 'Отправка...' : 'Nosūta...'}
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            {t('contact.success')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {t('contact.submit')}
          </>
        )}
      </Button>
    </form>
  );
}
