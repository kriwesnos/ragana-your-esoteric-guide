import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Sparkles, Flame, Moon, Compass, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      titleKey: 'services.tarot.title',
      descKey: 'services.tarot.description',
      features: language === 'ru' 
        ? ['Индивидуальные расклады', 'Ответы на вопросы', 'Прогнозы на будущее', 'Работа с оракулами']
        : ['Individuālie izklājumi', 'Atbildes uz jautājumiem', 'Nākotnes prognozes', 'Darbs ar orākuliem'],
      color: 'primary',
    },
    {
      icon: Flame,
      titleKey: 'services.energy.title',
      descKey: 'services.energy.description',
      features: language === 'ru'
        ? ['Рейки сеансы', 'Энергетические чистки', 'Восстановление баланса', 'Работа с чакрами']
        : ['Reiki sesijas', 'Enerģētiskās tīrīšanas', 'Līdzsvara atjaunošana', 'Darbs ar čakrām'],
      color: 'accent',
    },
    {
      icon: Moon,
      titleKey: 'services.rituals.title',
      descKey: 'services.rituals.description',
      features: language === 'ru'
        ? ['Ритуалы на любовь', 'Привлечение успеха', 'Защитные обряды', 'Лунные практики']
        : ['Mīlestības rituāli', 'Veiksmes piesaiste', 'Aizsardzības rituāli', 'Mēness prakses'],
      color: 'rose',
    },
    {
      icon: Compass,
      titleKey: 'services.runes.title',
      descKey: 'services.runes.description',
      features: language === 'ru'
        ? ['Создание ставов', 'Активация формул', 'Индивидуальный подбор', 'Обучение работе']
        : ['Stavu izveide', 'Formulu aktivizēšana', 'Individuāla izvēle', 'Darba apmācība'],
      color: 'sage',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-spiritual">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.titleKey}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full">
                    <Link to="/contacts">
                      {t('hero.cta')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.subtitle')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('contact.description')}
          </p>
          <Button asChild size="lg" className="h-14 px-8 shadow-gold">
            <Link to="/contacts">
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
