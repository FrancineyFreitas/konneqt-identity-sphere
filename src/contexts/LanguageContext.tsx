import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

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
    
    // What is QSCIM section
    'whatIsQscim.title': 'O que é o',
    'whatIsQscim.title.qscim': 'QSCIM',
    'whatIsQscim.description': 'Solução de onboarding de usuários que importa dados de sistemas SIS, RH, CRM para diretórios como AD, Azure AD, Google e Okta e muitos outros.',
    'whatIsQscim.protocol.title': 'Baseado no protocolo SCIM',
    'whatIsQscim.protocol.standard': 'Padrão aberto para gestão de identidades',
    'whatIsQscim.protocol.faster': 'Provisionamento mais rápido e barato',
    'whatIsQscim.protocol.interoperability': 'Interoperabilidade entre sistemas',
    'whatIsQscim.protocol.errors': 'Redução de erros manuais',
    'whatIsQscim.automation.title': 'Automação Inteligente',
    'whatIsQscim.automation.description': 'Provisiona e desprovisiona usuários automaticamente com base em eventos',

    // How it works section
    'howItWorks.title': 'Como',
    'howItWorks.title.works': 'Funciona',
    'howItWorks.description': 'Um fluxo simples e eficiente em três etapas',
    'howItWorks.step1.title': 'Fonte de dados',
    'howItWorks.step1.description': 'SIS, RH ou CRM',
    'howItWorks.step2.title': 'Gateway QSCIM',
    'howItWorks.step2.description': 'Processamento e mapeamento SCIM',
    'howItWorks.step3.title': 'Sistemas de destino',
    'howItWorks.step3.description': 'Azure AD, Google, Okta, Active Directory, etc.',
    'howItWorks.realtime': 'Provisionamento em tempo real',

    // Challenges section
    'challenges.title': 'Desafios na',
    'challenges.title.education': 'Educação',
    'challenges.description': 'Instituições educacionais enfrentam desafios únicos na gestão de identidades',
    'challenges.volume.title': 'Volume massivo de usuários',
    'challenges.volume.description': '10.000+ alunos, 500+ professores, 200+ funcionários',
    'challenges.seasonality.title': 'Sazonalidade extrema',
    'challenges.seasonality.description': '85% dos acessos criados em 2 semanas',
    'challenges.diversity.title': 'Diversidade de perfis',
    'challenges.diversity.description': 'Graduação, pós-graduação, intercâmbio, visitantes',
    'challenges.impacts.title': 'Impactos Negativos',
    'challenges.impacts.time': 'Tempo gasto em tarefas manuais',
    'challenges.impacts.errors': 'Erros em provisionamento manual',
    'challenges.impacts.days': 'Dias para provisionar novos usuários',
    'challenges.impacts.cost': 'Custo anual de gestão manual',

    // Benefits section
    'benefits.title': 'Benefícios para',
    'benefits.title.institutions': 'Instituições Educacionais',
    'benefits.description': 'Transforme a gestão de identidades com resultados mensuráveis',
    'benefits.automation.title': 'Automação Completa',
    'benefits.automation.realtime': 'Provisionamento em tempo real',
    'benefits.automation.deprovisioning': 'Desprovisionamento seguro',
    'benefits.automation.sync': 'Sincronização em tempo real',
    'benefits.security.title': 'Segurança Avançada',
    'benefits.security.rbac': 'Controle de acesso baseado em função',
    'benefits.security.audit': 'Auditoria completa de acessos',
    'benefits.security.compliance': 'Conformidade com FERPA/LGPD',
    'benefits.efficiency.title': 'Eficiência Operacional',
    'benefits.efficiency.time': 'Economia de tempo',
    'benefits.efficiency.errors': 'Eliminação de erros humanos',
    'benefits.efficiency.scalability': 'Escalabilidade ilimitada',

    // Student Lifecycle section
    'studentLifecycle.title': 'Ciclo de Vida do',
    'studentLifecycle.title.student': 'Estudante',
    'studentLifecycle.description': 'Automação completa em todas as fases da jornada acadêmica',
    'studentLifecycle.enrollment.title': 'Matrícula',
    'studentLifecycle.enrollment.description': 'Provisiona e-mail, LMS, Wi-Fi, biblioteca e laboratórios',
    'studentLifecycle.courseChange.title': 'Mudança de curso',
    'studentLifecycle.courseChange.description': 'Atualiza grupos e permissões automaticamente',
    'studentLifecycle.graduation.title': 'Graduação',
    'studentLifecycle.graduation.description': 'Remove acessos acadêmicos e migra para ex-aluno',
    'studentLifecycle.semester.title': 'Novo semestre',
    'studentLifecycle.semester.description': '1.500 alunos provisionados automaticamente, sem erros',
    'studentLifecycle.exchange.title': 'Intercambistas',
    'studentLifecycle.exchange.description': 'Acessos temporários com expiração automática',
    'studentLifecycle.emergency.title': 'Suspensão de emergência',
    'studentLifecycle.emergency.description': 'Bloqueio imediato e auditável de todos os acessos',
    'studentLifecycle.instant.title': 'Automação Instantânea',
    'studentLifecycle.instant.description': 'Todos os eventos do ciclo de vida são processados automaticamente, garantindo que os estudantes tenham acesso aos recursos certos no momento certo.',

    // Staff Provisioning section
    'staffProvisioning.title': 'Provisionamento de',
    'staffProvisioning.title.staff': 'Professores e Funcionários',
    'staffProvisioning.description': 'Gestão automatizada para todos os tipos de colaboradores',
    'staffProvisioning.professor.title': 'Professor Titular',
    'staffProvisioning.admin.title': 'Funcionário Administrativo',
    'staffProvisioning.visiting.title': 'Professor Visitante',
    'staffProvisioning.accesses': 'Acessos Automáticos:',
    'staffProvisioning.professor.lms': 'LMS',
    'staffProvisioning.professor.grades': 'Sistema de notas',
    'staffProvisioning.professor.labs': 'Laboratórios',
    'staffProvisioning.professor.library': 'Biblioteca',
    'staffProvisioning.professor.email': 'E-mail',
    'staffProvisioning.admin.sis': 'SIS',
    'staffProvisioning.admin.hr': 'Sistema RH',
    'staffProvisioning.admin.financial': 'Financeiro',
    'staffProvisioning.admin.reports': 'Relatórios',
    'staffProvisioning.admin.email': 'E-mail',
    'staffProvisioning.visiting.temporary': 'Acesso temporário com expiração automática',
    'staffProvisioning.visiting.wifi': 'WiFi Guest',
    'staffProvisioning.visiting.lms': 'LMS Limitado',
    'staffProvisioning.visiting.library': 'Biblioteca',
    'staffProvisioning.visiting.labs': 'Labs Específicos',
    'staffProvisioning.flow.title': 'Fluxo de Provisionamento',
    'staffProvisioning.flow.hiring': 'Contratação no RH',
    'staffProvisioning.flow.processing': 'Processamento pelo QSCIM',
    'staffProvisioning.flow.provisioning': 'Provisionamento',
    'staffProvisioning.flow.credentials': 'Envio de credenciais',

    // Integrated Systems section
    'integratedSystems.title': 'Sistemas',
    'integratedSystems.title.integrated': 'Integrados',
    'integratedSystems.description': 'Conecte todos os sistemas da sua instituição em uma única solução',
    'integratedSystems.sis': 'Sistemas SIS',
    'integratedSystems.lms': 'LMS',
    'integratedSystems.directories': 'Diretórios',
    'integratedSystems.others': 'Outros Sistemas',
    'integratedSystems.others.wifi': 'Wi-Fi',
    'integratedSystems.others.labs': 'Laboratórios',
    'integratedSystems.others.access': 'Controle de acesso',
    'integratedSystems.others.printing': 'Impressão',
    'integratedSystems.realtime': 'Sincronização em tempo real',

    // Security section
    'security.title': 'Segurança e',
    'security.title.compliance': 'Conformidade',
    'security.description': 'Proteção robusta com os mais altos padrões de segurança',
    'security.rbac.title': 'Acesso baseado em função',
    'security.rbac.description': 'Controle granular de permissões por perfil',
    'security.audit.title': 'Trilha de auditoria completa',
    'security.audit.description': 'Registro detalhado de todas as ações',
    'security.tls.title': 'Criptografia TLS 1.3',
    'security.tls.description': 'Dados protegidos em trânsito',
    'security.aes.title': 'Criptografia AES-256',
    'security.aes.description': 'Dados protegidos em repouso',
    'security.compliance.title': 'Conformidade Regulatória',
    'security.compliance.ferpa': 'Proteção de dados educacionais',
    'security.compliance.lgpd': 'Conformidade brasileira',
    'security.compliance.gdpr': 'Regulamentação europeia',
    'security.compliance.soc2': 'Segurança e disponibilidade',
    'security.layers.title': 'Camadas de Segurança',
    'security.layers.mfa': 'Autenticação multifator (MFA)',
    'security.layers.rbac': 'Controle de acesso por função',
    'security.layers.encryption': 'Criptografia',
    'security.layers.monitoring': 'Monitoramento em tempo real',
    'security.layers.logs': 'Logs e relatórios de auditoria',
    'security.metrics.availability': 'Disponibilidade',
    'security.metrics.response': 'Tempo de resposta',
    
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
    
    // Contact form success/error messages
    'contact.form.success.title': 'Formulário enviado!',
    'contact.form.success.description': 'Entraremos em contato em breve.',
    'contact.form.error.title': 'Erro no envio',
    'contact.form.error.description': 'Tente novamente mais tarde.',
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
    
    // What is QSCIM section
    'whatIsQscim.title': 'What is',
    'whatIsQscim.title.qscim': 'QSCIM',
    'whatIsQscim.description': 'User onboarding solution that imports data from SIS, HR, CRM systems to directories like AD, Azure AD, Google and Okta and many others.',
    'whatIsQscim.protocol.title': 'Based on SCIM protocol',
    'whatIsQscim.protocol.standard': 'Open standard for identity management',
    'whatIsQscim.protocol.faster': 'Faster and cheaper provisioning',
    'whatIsQscim.protocol.interoperability': 'Interoperability between systems',
    'whatIsQscim.protocol.errors': 'Reduction of manual errors',
    'whatIsQscim.automation.title': 'Smart Automation',
    'whatIsQscim.automation.description': 'Automatically provisions and deprovisions users based on events',

    // How it works section
    'howItWorks.title': 'How It',
    'howItWorks.title.works': 'Works',
    'howItWorks.description': 'A simple and efficient three-step flow',
    'howItWorks.step1.title': 'Data source',
    'howItWorks.step1.description': 'SIS, HR or CRM',
    'howItWorks.step2.title': 'QSCIM Gateway',
    'howItWorks.step2.description': 'SCIM processing and mapping',
    'howItWorks.step3.title': 'Target systems',
    'howItWorks.step3.description': 'Azure AD, Google, Okta, Active Directory, etc.',
    'howItWorks.realtime': 'Real-time provisioning',

    // Challenges section
    'challenges.title': 'Challenges in',
    'challenges.title.education': 'Education',
    'challenges.description': 'Educational institutions face unique challenges in identity management',
    'challenges.volume.title': 'Massive user volume',
    'challenges.volume.description': '10,000+ students, 500+ teachers, 200+ staff',
    'challenges.seasonality.title': 'Extreme seasonality',
    'challenges.seasonality.description': '85% of access created in 2 weeks',
    'challenges.diversity.title': 'Profile diversity',
    'challenges.diversity.description': 'Undergraduate, graduate, exchange, visitors',
    'challenges.impacts.title': 'Negative Impacts',
    'challenges.impacts.time': 'Time spent on manual tasks',
    'challenges.impacts.errors': 'Errors in manual provisioning',
    'challenges.impacts.days': 'Days to provision new users',
    'challenges.impacts.cost': 'Annual manual management cost',

    // Benefits section
    'benefits.title': 'Benefits for',
    'benefits.title.institutions': 'Educational Institutions',
    'benefits.description': 'Transform identity management with measurable results',
    'benefits.automation.title': 'Complete Automation',
    'benefits.automation.realtime': 'Real-time provisioning',
    'benefits.automation.deprovisioning': 'Secure deprovisioning',
    'benefits.automation.sync': 'Real-time synchronization',
    'benefits.security.title': 'Advanced Security',
    'benefits.security.rbac': 'Role-based access control',
    'benefits.security.audit': 'Complete access auditing',
    'benefits.security.compliance': 'FERPA/GDPR compliance',
    'benefits.efficiency.title': 'Operational Efficiency',
    'benefits.efficiency.time': 'Time savings',
    'benefits.efficiency.errors': 'Elimination of human errors',
    'benefits.efficiency.scalability': 'Unlimited scalability',

    // Student Lifecycle section
    'studentLifecycle.title': 'Student',
    'studentLifecycle.title.student': 'Lifecycle',
    'studentLifecycle.description': 'Complete automation at all stages of the academic journey',
    'studentLifecycle.enrollment.title': 'Enrollment',
    'studentLifecycle.enrollment.description': 'Provisions email, LMS, Wi-Fi, library and labs',
    'studentLifecycle.courseChange.title': 'Course change',
    'studentLifecycle.courseChange.description': 'Updates groups and permissions automatically',
    'studentLifecycle.graduation.title': 'Graduation',
    'studentLifecycle.graduation.description': 'Removes academic access and migrates to alumni',
    'studentLifecycle.semester.title': 'New semester',
    'studentLifecycle.semester.description': '1,500 students provisioned automatically, error-free',
    'studentLifecycle.exchange.title': 'Exchange students',
    'studentLifecycle.exchange.description': 'Temporary access with automatic expiration',
    'studentLifecycle.emergency.title': 'Emergency suspension',
    'studentLifecycle.emergency.description': 'Immediate and auditable blocking of all access',
    'studentLifecycle.instant.title': 'Instant Automation',
    'studentLifecycle.instant.description': 'All lifecycle events are processed automatically, ensuring students have access to the right resources at the right time.',

    // Staff Provisioning section
    'staffProvisioning.title': 'Provisioning of',
    'staffProvisioning.title.staff': 'Teachers and Staff',
    'staffProvisioning.description': 'Automated management for all types of collaborators',
    'staffProvisioning.professor.title': 'Full Professor',
    'staffProvisioning.admin.title': 'Administrative Staff',
    'staffProvisioning.visiting.title': 'Visiting Professor',
    'staffProvisioning.accesses': 'Automatic Access:',
    'staffProvisioning.professor.lms': 'LMS',
    'staffProvisioning.professor.grades': 'Grading system',
    'staffProvisioning.professor.labs': 'Laboratories',
    'staffProvisioning.professor.library': 'Library',
    'staffProvisioning.professor.email': 'Email',
    'staffProvisioning.admin.sis': 'SIS',
    'staffProvisioning.admin.hr': 'HR System',
    'staffProvisioning.admin.financial': 'Financial',
    'staffProvisioning.admin.reports': 'Reports',
    'staffProvisioning.admin.email': 'Email',
    'staffProvisioning.visiting.temporary': 'Temporary access with automatic expiration',
    'staffProvisioning.visiting.wifi': 'WiFi Guest',
    'staffProvisioning.visiting.lms': 'Limited LMS',
    'staffProvisioning.visiting.library': 'Library',
    'staffProvisioning.visiting.labs': 'Specific Labs',
    'staffProvisioning.flow.title': 'Provisioning Flow',
    'staffProvisioning.flow.hiring': 'HR Hiring',
    'staffProvisioning.flow.processing': 'QSCIM Processing',
    'staffProvisioning.flow.provisioning': 'Provisioning',
    'staffProvisioning.flow.credentials': 'Credential Sending',

    // Integrated Systems section
    'integratedSystems.title': 'Integrated',
    'integratedSystems.title.integrated': 'Systems',
    'integratedSystems.description': 'Connect all your institution\'s systems in a single solution',
    'integratedSystems.sis': 'SIS Systems',
    'integratedSystems.lms': 'LMS',
    'integratedSystems.directories': 'Directories',
    'integratedSystems.others': 'Other Systems',
    'integratedSystems.others.wifi': 'Wi-Fi',
    'integratedSystems.others.labs': 'Laboratories',
    'integratedSystems.others.access': 'Access control',
    'integratedSystems.others.printing': 'Printing',
    'integratedSystems.realtime': 'Real-time synchronization',

    // Security section
    'security.title': 'Security and',
    'security.title.compliance': 'Compliance',
    'security.description': 'Robust protection with the highest security standards',
    'security.rbac.title': 'Role-based access',
    'security.rbac.description': 'Granular permission control by profile',
    'security.audit.title': 'Complete audit trail',
    'security.audit.description': 'Detailed record of all actions',
    'security.tls.title': 'TLS 1.3 encryption',
    'security.tls.description': 'Data protected in transit',
    'security.aes.title': 'AES-256 encryption',
    'security.aes.description': 'Data protected at rest',
    'security.compliance.title': 'Regulatory Compliance',
    'security.compliance.ferpa': 'Educational data protection',
    'security.compliance.lgpd': 'Brazilian compliance',
    'security.compliance.gdpr': 'European regulation',
    'security.compliance.soc2': 'Security and availability',
    'security.layers.title': 'Security Layers',
    'security.layers.mfa': 'Multi-factor authentication (MFA)',
    'security.layers.rbac': 'Role-based access control',
    'security.layers.encryption': 'Encryption',
    'security.layers.monitoring': 'Real-time monitoring',
    'security.layers.logs': 'Audit logs and reports',
    'security.metrics.availability': 'Availability',
    'security.metrics.response': 'Response time',
    
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
    
    // Contact form success/error messages
    'contact.form.success.title': 'Form submitted!',
    'contact.form.success.description': 'We will contact you soon.',
    'contact.form.error.title': 'Submission error',
    'contact.form.error.description': 'Please try again later.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Changed default to English

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en'; // Updated toggle logic
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
