import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import en from '../translations/en.json';
import pt from '../translations/pt.json';

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale || 'en');

  useEffect(() => {
    // Update the language state when the router locale changes
    setLanguage(router.locale || 'en');
  }, [router.locale]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    router.push(router.pathname, router.pathname, { locale: newLanguage });
  };

  const translations = {
    en: {
      nav: {
        home: "Home",
        whatIsQSCIM: "What is QSCIM?",
        challenges: "Challenges",
        benefits: "Benefits",
        contact: "Contact",
        login: "Login"
      },
      hero: {
        title: "The Most Complete Platform for Identity Management",
        subtitle: "Automate identity lifecycle management, ensure compliance, and reduce operational costs with our all-in-one solution.",
        button: "Start Now"
      },
      whatIsQSCIM: {
        title: "What is QSCIM?",
        description: "QSCIM is a comprehensive platform designed to streamline and automate identity management processes. It enables organizations to efficiently manage user access, ensure compliance with security policies, and reduce operational overhead.",
        features: {
          automation: "Automated Provisioning",
          compliance: "Compliance Management",
          security: "Enhanced Security",
          reporting: "Detailed Reporting"
        }
      },
      challenges: {
        title: "Main Challenges",
        description: "Discover the challenges that QSCIM can solve",
        manualProcesses: "Manual Processes",
        complianceRisks: "Compliance Risks",
        securityVulnerabilities: "Security Vulnerabilities",
        operationalInefficiency: "Operational Inefficiency"
      },
      benefits: {
        title: "Benefits for Educational",
        "title.institutions": "Institutions",
        description: "Transform identity management with measurable results",
        scenario: {
          title: "Annual Impact Scenario",
          total: "Total annual savings with QSCIM implementation",
          operational: "Operational cost reduction",
          productivity: "Productivity gains",
          security: "Security improvements"
        },
        metrics: {
          provisioning: "Provisioning",
          deprovisioning: "Deprovisioning", 
          compliance: "LGPD / MEC",
          conformidade: "Compliance",
          reduction: "Reduction",
          tickets: "Tickets",
          systems: "Integrated",
          integrados: "Systems"
        },
        automation: {
          title: "Process Automation",
          realtime: "Real-time user provisioning",
          deprovisioning: "Automatic deprovisioning",
          sync: "Multi-system synchronization"
        },
        security: {
          title: "Enhanced Security",
          rbac: "Role-based access control",
          audit: "Complete audit trail",
          compliance: "LGPD compliance"
        },
        efficiency: {
          title: "Operational Efficiency", 
          time: "90% reduction in manual tasks",
          errors: "Elimination of human errors",
          scalability: "Unlimited scalability"
        }
      },
      contact: {
        title: "Contact Us",
        description: "Get in touch to learn more about how QSCIM can transform your institution.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          button: "Send Message"
        }
      },
      footer: {
        copyright: "© 2024 QSCIM. All rights reserved."
      }
    },
    pt: {
      nav: {
        home: "Início",
        whatIsQSCIM: "O que é QSCIM?",
        challenges: "Desafios",
        benefits: "Benefícios",
        contact: "Contato",
        login: "Login"
      },
      hero: {
        title: "A Plataforma Mais Completa para Gestão de Identidades",
        subtitle: "Automatize o gerenciamento do ciclo de vida das identidades, garanta a conformidade e reduza os custos operacionais com nossa solução completa.",
        button: "Começar Agora"
      },
      whatIsQSCIM: {
        title: "O que é QSCIM?",
        description: "QSCIM é uma plataforma abrangente projetada para otimizar e automatizar os processos de gerenciamento de identidades. Ele permite que as organizações gerenciem com eficiência o acesso do usuário, garantam a conformidade com as políticas de segurança e reduzam os custos operacionais.",
        features: {
          automation: "Provisionamento Automatizado",
          compliance: "Gestão de Conformidade",
          security: "Segurança Aprimorada",
          reporting: "Relatórios Detalhados"
        }
      },
      challenges: {
        title: "Principais Desafios",
        description: "Descubra os desafios que o QSCIM pode resolver",
        manualProcesses: "Processos Manuais",
        complianceRisks: "Riscos de Conformidade",
        securityVulnerabilities: "Vulnerabilidades de Segurança",
        operationalInefficiency: "Ineficiência Operacional"
      },
      benefits: {
        title: "Benefícios para",
        "title.institutions": "Instituições de Ensino",
        description: "Transforme o gerenciamento de identidades com resultados mensuráveis",
        scenario: {
          title: "Cenário de Impacto Anual",
          total: "Total de economia anual com implementação do QSCIM",
          operational: "Redução de custos operacionais",
          productivity: "Ganhos de produtividade",
          security: "Melhorias de segurança"
        },
        metrics: {
          provisioning: "Provisionamento",
          deprovisioning: "Desprovisionamento",
          compliance: "LGPD / MEC",
          conformidade: "Conformidade", 
          reduction: "Redução",
          tickets: "Chamados",
          systems: "Sistemas",
          integrados: "Integrados"
        },
        automation: {
          title: "Automação de Processos",
          realtime: "Provisionamento em tempo real",
          deprovisioning: "Desprovisionamento automático", 
          sync: "Sincronização multi-sistemas"
        },
        security: {
          title: "Segurança Aprimorada",
          rbac: "Controle de acesso baseado em funções",
          audit: "Trilha de auditoria completa",
          compliance: "Conformidade com LGPD"
        },
        efficiency: {
          title: "Eficiência Operacional",
          time: "90% de redução em tarefas manuais", 
          errors: "Eliminação de erros humanos",
          scalability: "Escalabilidade ilimitada"
        }
      },
      contact: {
        title: "Contate-nos",
        description: "Entre em contato para saber mais sobre como o QSCIM pode transformar sua instituição.",
        form: {
          name: "Nome",
          email: "Email",
          message: "Mensagem",
          button: "Enviar Mensagem"
        }
      },
      footer: {
        copyright: "© 2024 QSCIM. Todos os direitos reservados."
      }
    }
  };

  const t = (key: string, params: Record<string, string | number> = {}) => {
    let translation = translations[language as keyof typeof translations]?.[key];

    if (!translation) {
      console.warn(`Translation not found for key: ${key} in language: ${language}`);
      return key;
    }

    for (const paramKey in params) {
      const regex = new RegExp(`\\{${paramKey}\\}`, 'g');
      translation = translation.replace(regex, String(params[paramKey]));
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
