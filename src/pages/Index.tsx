import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Moon, Stars, Flame, Compass, Users, Calendar } from 'lucide-react';

import tarotImage from '@/assets/services/tarot.png';
import energyImage from '@/assets/services/energy.png';
import ritualsImage from '@/assets/services/rituals.png';
import runesImage from '@/assets/services/runes.png';
import heroImage from '@/assets/hero-ingrida.jpg';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Sparkles, titleKey: 'services.tarot.title', descKey: 'services.tarot.description', image: tarotImage },
    { icon: Flame, titleKey: 'services.energy.title', descKey: 'services.energy.description', image: energyImage },
    { icon: Moon, titleKey: 'services.rituals.title', descKey: 'services.rituals.description', image: ritualsImage },
    { icon: Compass, titleKey: 'services.runes.title', descKey: 'services.runes.description', image: runesImage },
  ];

  const stats = [
    { icon: Calendar, value: '10+', labelKey: 'about.experience' },
    { icon: Users, value: '500+', labelKey: 'about.clients' },
    { icon: Stars, value: '2000+', labelKey: 'about.sessions' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Ingrida Mystic" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Stars className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t('hero.subtitle')}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('hero.title')}
            </h1>

            {/* Decorative line */}
            <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button asChild size="lg" className="h-14 px-8 text-base shadow-gold">
                <Link to="/contacts">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link to="/services">
                  {t('hero.explore')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-heading text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.titleKey}
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                delay={index * 100}
                image={service.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                {t('common.learnMore')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Moon className="w-16 h-16 mx-auto mb-6 text-primary opacity-80" />
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
        </div>
      </section>
    </Layout>
  );
};

export default Index;
