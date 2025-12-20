import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contacts = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ragana.ingrida@gmail.com',
      href: 'mailto:ragana.ingrida@gmail.com',
    },
    {
      icon: Phone,
      label: language === 'ru' ? 'Телефон' : 'Tālrunis',
      value: '+371 27 542 077',
      href: 'tel:+37127542077',
    },
    {
      icon: MapPin,
      label: language === 'ru' ? 'Адрес' : 'Adrese',
      value: 'Latvija, Rīga. Līzuma iela 1',
      href: '#',
    },
    {
      icon: Clock,
      label: language === 'ru' ? 'Время работы' : 'Darba laiks',
      value: language === 'ru' ? 'Пн-Сб: 10:00 - 20:00' : 'P-S: 10:00 - 20:00',
      href: '#',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-spiritual">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-spiritual">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  {t('contact.subtitle')}
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  {language === 'ru' ? 'Контактная информация' : 'Kontaktinformācija'}
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {language === 'ru' ? 'Мы в социальных сетях' : 'Mēs sociālajos tīklos'}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/ingrida_mystic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://facebook.com/ragana.lv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8934566974655!2d24.121789!3d56.9598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd4a5c6c8c3%3A0x8c4e9b9b9c4b4f5c!2sL%C4%ABzuma%20iela%201%2C%20R%C4%ABga!5e0!3m2!1slv!2slv!4v1703000000000!5m2!1slv!2slv"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Līzuma iela 1, Rīga"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
