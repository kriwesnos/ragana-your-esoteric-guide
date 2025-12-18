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
      value: 'info@ragana.lv',
      href: 'mailto:info@ragana.lv',
    },
    {
      icon: Phone,
      label: language === 'ru' ? 'Телефон' : 'Tālrunis',
      value: '+371 20 000 000',
      href: 'tel:+37120000000',
    },
    {
      icon: MapPin,
      label: language === 'ru' ? 'Адрес' : 'Adrese',
      value: 'Rīga, Latvija',
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
                    href="#"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">Rīga, Latvija</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
