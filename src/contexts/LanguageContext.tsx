import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'lv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.training': 'Обучение',
    'nav.contacts': 'Контакты',
    
    // Hero
    'hero.title': 'Ragana',
    'hero.subtitle': 'Путь к гармонии души и духа',
    'hero.description': 'Откройте тайны древних практик. Таро, руны, энергетическое целительство и магические ритуалы для вашего духовного развития.',
    'hero.cta': 'Записаться на консультацию',
    'hero.explore': 'Узнать больше',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Выберите путь к трансформации',
    'services.tarot.title': 'Таро и гадания',
    'services.tarot.description': 'Расклады Таро, работа с оракулами и рунами. Получите ответы на важные вопросы и откройте скрытые возможности.',
    'services.energy.title': 'Энергетические практики',
    'services.energy.description': 'Рейки, энергетические чистки, целительство. Восстановите баланс и гармонию на всех уровнях бытия.',
    'services.rituals.title': 'Магические ритуалы',
    'services.rituals.description': 'Обряды на привлечение любви, успеха, защиты. Работа с энергиями для достижения ваших целей.',
    'services.runes.title': 'Рунические ставы',
    'services.runes.description': 'Создание и активация индивидуальных рунических формул для решения конкретных задач.',
    'services.more': 'Подробнее',
    
    // About
    'about.title': 'О нас',
    'about.subtitle': 'Ragana — это пространство духовного развития',
    'about.description1': 'Мы практикуем древние эзотерические традиции, объединяя мудрость поколений с современным пониманием энергетических практик.',
    'about.description2': 'Наша миссия — помочь вам найти путь к себе, раскрыть внутренний потенциал и обрести гармонию на всех уровнях бытия.',
    'about.experience': 'Лет опыта',
    'about.clients': 'Довольных клиентов',
    'about.sessions': 'Проведённых сеансов',
    
    // Training
    'training.title': 'Обучение',
    'training.subtitle': 'Станьте мастером эзотерических практик',
    'training.description': 'Мы предлагаем курсы и мастер-классы для всех уровней подготовки',
    'training.course1.title': 'Основы Таро',
    'training.course1.description': 'Изучите значения карт, научитесь делать расклады и интерпретировать ответы.',
    'training.course2.title': 'Рунная магия',
    'training.course2.description': 'Освойте руны, создавайте ставы и работайте с рунической энергией.',
    'training.course3.title': 'Энергетическое целительство',
    'training.course3.description': 'Научитесь работать с энергией, проводить чистки и восстанавливать баланс.',
    'training.enroll': 'Записаться на курс',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь с нами',
    'contact.description': 'Готовы начать путь трансформации? Оставьте заявку, и мы свяжемся с вами.',
    'contact.name': 'Ваше имя',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.service': 'Выберите услугу',
    'contact.submit': 'Отправить заявку',
    'contact.success': 'Заявка успешно отправлена!',
    'contact.error': 'Ошибка при отправке. Попробуйте ещё раз.',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    
    // Common
    'common.learnMore': 'Узнать больше',
  },
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.about': 'Par mums',
    'nav.services': 'Pakalpojumi',
    'nav.training': 'Apmācības',
    'nav.contacts': 'Kontakti',
    
    // Hero
    'hero.title': 'Ragana',
    'hero.subtitle': 'Ceļš uz dvēseles un gara harmoniju',
    'hero.description': 'Atklājiet seno prakšu noslēpumus. Taro, rūnas, enerģētiskā dziedināšana un maģiski rituāli jūsu garīgajai attīstībai.',
    'hero.cta': 'Pierakstīties konsultācijai',
    'hero.explore': 'Uzzināt vairāk',
    
    // Services
    'services.title': 'Mūsu pakalpojumi',
    'services.subtitle': 'Izvēlieties savu transformācijas ceļu',
    'services.tarot.title': 'Taro un zīlēšana',
    'services.tarot.description': 'Taro izklājumi, darbs ar orākuliem un rūnām. Saņemiet atbildes uz svarīgiem jautājumiem un atklājiet slēptās iespējas.',
    'services.energy.title': 'Enerģētiskās prakses',
    'services.energy.description': 'Reiki, enerģētiskās tīrīšanas, dziedināšana. Atjaunojiet līdzsvaru un harmoniju visos esamības līmeņos.',
    'services.rituals.title': 'Maģiski rituāli',
    'services.rituals.description': 'Rituāli mīlestības, veiksmes, aizsardzības piesaistīšanai. Darbs ar enerģijām jūsu mērķu sasniegšanai.',
    'services.runes.title': 'Rūnu stavas',
    'services.runes.description': 'Individuālu rūnu formulu izveide un aktivizēšana konkrētu uzdevumu risināšanai.',
    'services.more': 'Vairāk',
    
    // About
    'about.title': 'Par mums',
    'about.subtitle': 'Ragana — garīgās attīstības telpa',
    'about.description1': 'Mēs praktizējam senās ezotēriskās tradīcijas, apvienojot paaudžu gudrību ar mūsdienu izpratni par enerģētiskajām praksēm.',
    'about.description2': 'Mūsu misija — palīdzēt jums atrast ceļu pie sevis, atklāt iekšējo potenciālu un iegūt harmoniju visos esamības līmeņos.',
    'about.experience': 'Gadi pieredzes',
    'about.clients': 'Apmierināti klienti',
    'about.sessions': 'Veiktas sesijas',
    
    // Training
    'training.title': 'Apmācības',
    'training.subtitle': 'Kļūstiet par ezotērisko prakšu meistaru',
    'training.description': 'Mēs piedāvājam kursus un meistarklases visiem sagatavotības līmeņiem',
    'training.course1.title': 'Taro pamati',
    'training.course1.description': 'Apgūstiet kāršu nozīmes, iemācieties veidot izklājumus un interpretēt atbildes.',
    'training.course2.title': 'Rūnu maģija',
    'training.course2.description': 'Apgūstiet rūnas, veidojiet stavas un strādājiet ar rūnu enerģiju.',
    'training.course3.title': 'Enerģētiskā dziedināšana',
    'training.course3.description': 'Iemācieties strādāt ar enerģiju, veikt tīrīšanas un atjaunot līdzsvaru.',
    'training.enroll': 'Pierakstīties kursam',
    
    // Contact
    'contact.title': 'Kontakti',
    'contact.subtitle': 'Sazinieties ar mums',
    'contact.description': 'Gatavi sākt transformācijas ceļu? Atstājiet pieteikumu, un mēs ar jums sazināsimies.',
    'contact.name': 'Jūsu vārds',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.message': 'Ziņojums',
    'contact.service': 'Izvēlieties pakalpojumu',
    'contact.submit': 'Nosūtīt pieteikumu',
    'contact.success': 'Pieteikums veiksmīgi nosūtīts!',
    'contact.error': 'Kļūda nosūtīšanā. Mēģiniet vēlreiz.',
    
    // Footer
    'footer.rights': 'Visas tiesības aizsargātas',
    'footer.privacy': 'Privātuma politika',
    
    // Common
    'common.learnMore': 'Uzzināt vairāk',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('ragana-language');
    return (saved as Language) || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('ragana-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
