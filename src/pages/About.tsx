import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Moon, Heart, Eye, Sparkles, Users, Calendar, Stars } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: 'ru' === 'ru' ? 'Искренность' : 'Sirsnība', desc: 'ru' === 'ru' ? 'Честный и открытый подход к каждому клиенту' : 'Godīga un atklāta pieeja katram klientam' },
    { icon: Eye, title: 'ru' === 'ru' ? 'Глубина' : 'Dziļums', desc: 'ru' === 'ru' ? 'Глубокое понимание эзотерических практик' : 'Dziļa ezotērisko prakšu izpratne' },
    { icon: Sparkles, title: 'ru' === 'ru' ? 'Трансформация' : 'Transformācija', desc: 'ru' === 'ru' ? 'Помогаем раскрыть ваш внутренний потенциал' : 'Palīdzam atklāt jūsu iekšējo potenciālu' },
  ];

  const stats = [
    { icon: Calendar, value: '10+', labelKey: 'about.experience' },
    { icon: Users, value: '500+', labelKey: 'about.clients' },
    { icon: Stars, value: '2000+', labelKey: 'about.sessions' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-spiritual">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Moon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-lavender/20 flex items-center justify-center">
                <div className="text-center">
                  <Moon className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <Sparkles className="w-12 h-12 text-accent/60 mx-auto" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {t('about.subtitle')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.description1')}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.description2')}
              </p>
              
              {/* Stats inline */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <div className="font-heading text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('about.subtitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
