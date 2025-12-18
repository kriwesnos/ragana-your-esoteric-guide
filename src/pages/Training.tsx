import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen, Compass, Flame, ArrowRight, Clock, Users, Award } from 'lucide-react';

const Training = () => {
  const { t, language } = useLanguage();

  const courses = [
    {
      icon: BookOpen,
      titleKey: 'training.course1.title',
      descKey: 'training.course1.description',
      duration: language === 'ru' ? '8 недель' : '8 nedēļas',
      level: language === 'ru' ? 'Начальный' : 'Sākuma',
      students: '12',
    },
    {
      icon: Compass,
      titleKey: 'training.course2.title',
      descKey: 'training.course2.description',
      duration: language === 'ru' ? '10 недель' : '10 nedēļas',
      level: language === 'ru' ? 'Средний' : 'Vidējs',
      students: '8',
    },
    {
      icon: Flame,
      titleKey: 'training.course3.title',
      descKey: 'training.course3.description',
      duration: language === 'ru' ? '12 недель' : '12 nedēļas',
      level: language === 'ru' ? 'Продвинутый' : 'Augsts',
      students: '6',
    },
  ];

  const benefits = language === 'ru'
    ? [
        'Индивидуальный подход к каждому ученику',
        'Практические занятия и упражнения',
        'Поддержка во время и после обучения',
        'Сертификат по окончании курса',
      ]
    : [
        'Individuāla pieeja katram studentam',
        'Praktiskās nodarbības un vingrinājumi',
        'Atbalsts apmācību laikā un pēc tām',
        'Sertifikāts pēc kursa beigām',
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-spiritual">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('training.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              {t('training.subtitle')}
            </p>
            <p className="text-muted-foreground">
              {t('training.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.titleKey}
                className="group bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="p-8 bg-primary/5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <course.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {t(course.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(course.descKey)}
                  </p>
                </div>

                {/* Details */}
                <div className="p-8 pt-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{course.level}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground">
                        {language === 'ru' ? `До ${course.students} человек` : `Līdz ${course.students} cilvēkiem`}
                      </span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/contacts">
                      {t('training.enroll')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {language === 'ru' ? 'Почему выбирают нас' : 'Kāpēc izvēlas mūs'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              {t('training.enroll')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
