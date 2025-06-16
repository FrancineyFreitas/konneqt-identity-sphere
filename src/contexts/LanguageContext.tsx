
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Hero section
    'hero.badge': 'Solução Líder em Gestão de Identidades',
    'hero.title.qscim': 'QSCIM',
    'hero.title.for': 'para',
    'hero.title.schools': 'Escolas',
    'hero.title.and': 'e',
    'hero.title.universities': 'Universidades',
    'hero.subtitle': 'Revolucionando o Provisionamento de Identidades',
    'hero.description': 'Transforme a gestão de identidades em sua instituição educacional com a solução QSCIM da Konneqt.',
    'hero.cta': 'Solicitar Demonstração',
    'hero.badge.automation': '✅ Automação Completa',
    'hero.badge.security': '✅ Segurança Avançada',
    'hero.badge.scalability': '✅ Escalabilidade',
    'hero.floating.provisioning': 'Provisionamento Automático',
    'hero.floating.provisioning.desc': 'Em minutos, não dias',
    'hero.floating.automation': 'Automação Inteligente',
    'hero.floating.automation.desc': 'Provisiona e desprovisiona usuários automaticamente com base em eventos',
    
    // Contact section
    'contact.title': 'Solicite uma',
    'contact.title.demo': 'Demonstração',
    'contact.description': 'Descubra como o QSCIM pode transformar a gestão de identidades da sua instituição',
    'contact.personalized': 'Demonstração personalizada',
    'contact.adapted': 'Adaptada à sua instituição',
    'contact.form.firstName': 'Nome *',
    'contact.form.lastName': 'Sobrenome *',
    'contact.form.institution': 'Nome da instituição *',
    'contact.form.email': 'E-mail *',
    'contact.form.phone': 'Telefone *',
    'contact.form.firstName.placeholder': 'Seu nome',
    'contact.form.lastName.placeholder': 'Seu sobrenome',
    'contact.form.institution.placeholder': 'Nome da sua instituição',
    'contact.form.email.placeholder': 'seu.email@instituicao.edu.br',
    'contact.form.phone.placeholder': '(11) 99999-9999',
    'contact.form.submit': 'Solicitar Demonstração',
    'contact.form.submitting': 'Enviando...',
    'contact.why.title': 'Por que escolher o QSCIM?',
    'contact.why.implementation': 'Implementação rápida e segura',
    'contact.why.support': 'Suporte especializado 24/7',
    'contact.why.compliance': 'Conformidade total com LGPD',
    
    // Footer
    'footer.rights': '© 2025 Konneqt. Todos os direitos reservados.',
  },
  en: {
    // Hero section
    'hero.badge': 'Leading Identity Management Solution',
    'hero.title.qscim': 'QSCIM',
    'hero.title.for': 'for',
    'hero.title.schools': 'Schools',
    'hero.title.and': 'and',
    'hero.title.universities': 'Universities',
    'hero.subtitle': 'Revolutionizing Identity Provisioning',
    'hero.description': 'Transform identity management in your educational institution with Konneqt\'s QSCIM solution.',
    'hero.cta': 'Request Demo',
    'hero.badge.automation': '✅ Complete Automation',
    'hero.badge.security': '✅ Advanced Security',
    'hero.badge.scalability': '✅ Scalability',
    'hero.floating.provisioning': 'Automatic Provisioning',
    'hero.floating.provisioning.desc': 'In minutes, not days',
    'hero.floating.automation': 'Smart Automation',
    'hero.floating.automation.desc': 'Automatically provisions and deprovisions users based on events',
    
    // Contact section
    'contact.title': 'Request a',
    'contact.title.demo': 'Demo',
    'contact.description': 'Discover how QSCIM can transform your institution\'s identity management',
    'contact.personalized': 'Personalized demonstration',
    'contact.adapted': 'Adapted to your institution',
    'contact.form.firstName': 'First Name *',
    'contact.form.lastName': 'Last Name *',
    'contact.form.institution': 'Institution Name *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Phone *',
    'contact.form.firstName.placeholder': 'Your first name',
    'contact.form.lastName.placeholder': 'Your last name',
    'contact.form.institution.placeholder': 'Your institution name',
    'contact.form.email.placeholder': 'your.email@institution.edu',
    'contact.form.phone.placeholder': '+1 (555) 123-4567',
    'contact.form.submit': 'Request Demo',
    'contact.form.submitting': 'Sending...',
    'contact.why.title': 'Why choose QSCIM?',
    'contact.why.implementation': 'Fast and secure implementation',
    'contact.why.support': '24/7 specialized support',
    'contact.why.compliance': 'Full GDPR compliance',
    
    // Footer
    'footer.rights': '© 2025 Konneqt. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
