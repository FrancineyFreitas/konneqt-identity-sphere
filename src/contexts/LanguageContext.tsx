import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

const translations = {
  en: {
    nav: {
      home: "Home",
      challenges: "Challenges",
      whatIsQSCIM: "What is QSCIM?",
      howItWorks: "How it Works",
      benefits: "Benefits",
      studentLifecycle: "Student Lifecycle",
      staffProvisioning: "Staff Provisioning",
      integratedSystems: "Integrated Systems",
      security: "Security & Compliance",
      contact: "Contact"
    },
    hero: {
      badge: "Automated Identity Provisioning",
      title: {
        qscim: "QSCIM",
        for: "for",
        schools: "Schools",
        and: "and",
        universities: "Universities"
      },
      subtitle: "Revolutionizing Identity Provisioning",
      description: "Automatically provision and manage user identities across all your educational systems. From enrollment to graduation, ensure secure and instant access to the right resources at the right time.",
      badge: {
        automation: "Complete Automation",
        security: "Enhanced Security", 
        scalability: "Unlimited Scalability"
      },
      cta: "Request Demo"
    },
    challenges: {
      title: "Main Challenges",
      title: {
        education: "in Education"
      },
      description: "Discover the main challenges faced by educational institutions in managing digital identities and how QSCIM can provide effective solutions.",
      volume: {
        title: "High Volume of Data",
        description: "Managing a large volume of student and staff data can be complex and prone to errors, leading to inefficiencies and security risks."
      },
      seasonality: {
        title: "Seasonality of Enrollments",
        description: "Enrollment periods create peaks in demand for IT resources, requiring scalable solutions to handle the influx of new user accounts and access requests."
      },
      diversity: {
        title: "Diversity of Systems",
        description: "Educational institutions often use a variety of systems that don't communicate with each other, making it difficult to maintain consistent and secure user access across all platforms."
      },
      scenario: {
        title: "Financial Impact Scenario",
        total: "Estimated annual financial impact of identity management inefficiencies in a typical educational institution.",
        operational: "Operational Inefficiencies",
        lost: "Lost Productivity",
        compliance: "Compliance Penalties"
      }
    },
    whatIsQscim: {
      title: "What is",
      title: {
        qscim: "QSCIM"
      },
      description: "QSCIM (Quantum School and Campus Identity Management) is a comprehensive solution designed to automate and streamline identity management processes in educational institutions. It ensures that students, faculty, and staff have the right access to the right resources at the right time, enhancing security, compliance, and operational efficiency.",
      protocol: {
        title: "Based on SCIM protocol",
        standard: "Standardized identity management",
        faster: "Faster and more efficient provisioning",
        interoperability: "Improved interoperability between systems",
        errors: "Reduced manual errors"
      },
      automation: {
        title: "Complete Automation",
        description: "Automate user provisioning, deprovisioning, and access management across all your systems, reducing manual effort and improving accuracy."
      }
    },
    howItWorks: {
      title: "How it",
      title: {
        works: "Works"
      },
      description: "QSCIM integrates seamlessly with your existing systems to automate identity management processes, ensuring efficient and secure access to resources.",
      step1: {
        title: "Data Source",
        description: "QSCIM connects to your primary data sources, such as SIS and HR systems, to gather user information."
      },
      step2: {
        title: "QSCIM Gateway",
        description: "The QSCIM Gateway processes and transforms the data, ensuring it is consistent and accurate."
      },
      step3: {
        title: "Target Systems",
        description: "QSCIM automatically provisions and manages user access across all connected systems, such as LMS, email, and directories."
      },
      realtime: "Real-time Provisioning"
    },
    benefits: {
      title: "Benefits for Educational",
      title: {
        institutions: "Institutions"
      },
      description: "QSCIM offers a range of benefits that enhance security, compliance, and operational efficiency for educational institutions.",
      automation: {
        title: "Complete Automation",
        realtime: "Real-time provisioning and deprovisioning",
        deprovisioning: "Automated deprovisioning upon graduation or departure",
        sync: "Automatic synchronization of user data across systems"
      },
      security: {
        title: "Enhanced Security",
        rbac: "Role-based access control (RBAC)",
        audit: "Complete audit trail of user access and changes",
        compliance: "Compliance with regulatory requirements (FERPA, GDPR, etc.)"
      },
      efficiency: {
        title: "Operational Efficiency",
        time: "Reduced time spent on manual provisioning tasks",
        errors: "Minimized errors and inconsistencies in user data",
        scalability: "Improved scalability to handle peak enrollment periods"
      },
      metrics: {
        provisioning: "Average Provisioning Time",
        compliance: "Data Accuracy & Compliance",
        reduction: "Manual Effort Reduction",
        systems: "Integrated Systems"
      }
    },
    studentLifecycle: {
      title: "Student",
      title: {
        student: "Lifecycle"
      },
      description: "QSCIM automates identity management throughout the student lifecycle, from enrollment to graduation, ensuring secure and efficient access to resources.",
      enrollment: {
        title: "Enrollment",
        description: "Automatic account creation and access provisioning upon enrollment."
      },
      courseChange: {
        title: "Course change",
        description: "Automated access adjustments when students change courses."
      },
      graduation: {
        title: "Graduation",
        description: "Automatic account deprovisioning and access revocation upon graduation."
      },
      semester: {
        title: "New semester",
        description: "Batch processing of account updates and access renewals at the start of each semester."
      },
      exchange: {
        title: "Exchange students",
        description: "Temporary account provisioning and access management for exchange students."
      },
      emergency: {
        title: "Emergency suspension",
        description: "Immediate suspension of access in case of disciplinary actions or emergencies."
      },
      instant: {
        title: "Instant Access",
        description: "Students gain immediate access to essential resources upon enrollment, enhancing their learning experience and productivity."
      }
    },
    staffProvisioning: {
      title: "Provisioning of Teachers and",
      title: {
        staff: "Staff"
      },
      description: "QSCIM streamlines the provisioning of teachers and staff, ensuring they have the necessary access to perform their duties efficiently and securely.",
      professor: {
        title: "Full Professor",
        lms: "Access to Learning Management System (LMS)",
        grades: "Access to grade submission system",
        labs: "Access to research labs and resources",
        library: "Access to digital library resources",
        email: "University email account"
      },
      admin: {
        title: "Administrative Staff",
        sis: "Access to Student Information System (SIS)",
        hr: "Access to Human Resources (HR) system",
        financial: "Access to financial management system",
        reports: "Access to administrative reports",
        email: "University email account"
      },
      visiting: {
        title: "Visiting Professor",
        temporary: "Temporary access to university systems",
        wifi: "Access to campus Wi-Fi network",
        lms: "Limited access to Learning Management System (LMS)",
        library: "Access to digital library resources",
        labs: "Access to specific research labs"
      },
      accesses: "Common Accesses",
      flow: {
        title: "Automated Provisioning Flow",
        hiring: "Hiring Process",
        processing: "HR Data Processing",
        provisioning: "Automated Account Provisioning",
        credentials: "Credential Delivery"
      }
    },
    integratedSystems: {
      title: "Integrated",
      title: {
        integrated: "Systems"
      },
      description: "QSCIM integrates seamlessly with a variety of systems commonly used in educational institutions, ensuring consistent and secure identity management across all platforms.",
      sis: "SIS Systems",
      lms: "LMS",
      directories: "Directories",
      others: "Other Systems",
      others: {
        wifi: "Wi-Fi Access",
        labs: "Lab Access",
        access: "Physical Access Control",
        printing: "Printing Services"
      },
      realtime: "Real-time Integration"
    },
    security: {
      title: "Security and",
      title: {
        compliance: "Compliance"
      },
      description: "QSCIM ensures the highest levels of security and compliance with industry standards, protecting sensitive data and maintaining regulatory adherence.",
      rbac: {
        title: "Role-based access",
        description: "Role-based access control (RBAC) ensures that users have only the necessary permissions."
      },
      audit: {
        title: "Complete audit trail",
        description: "A comprehensive audit trail tracks all user access and changes for security and compliance purposes."
      },
      tls: {
        title: "TLS 1.3 encryption",
        description: "End-to-end encryption with TLS 1.3 protects data in transit."
      },
      aes: {
        title: "AES-256 encryption",
        description: "AES-256 encryption secures data at rest."
      },
      compliance: {
        title: "Regulatory Compliance",
        ferpa: "Compliance with the Family Educational Rights and Privacy Act (FERPA).",
        lgpd: "Compliance with the Lei Geral de Proteção de Dados (LGPD).",
        gdpr: "Compliance with the General Data Protection Regulation (GDPR).",
        soc2: "Compliance with SOC 2 standards."
      },
      layers: {
        title: "Multi-Layered Security",
        mfa: "Multi-Factor Authentication (MFA)",
        rbac: "Role-Based Access Control (RBAC)",
        encryption: "End-to-End Encryption",
        monitoring: "Real-Time Monitoring",
        logs: "Detailed Audit Logs"
      },
      metrics: {
        availability: "System Availability",
        response: "Average Response Time"
      }
    },
    contact: {
      title: "Request a",
      title: {
        demo: "Demo"
      },
      description: "Contact us to learn more about how QSCIM can transform identity management at your educational institution.",
      form: {
        firstName: "First Name",
        firstName: {
          placeholder: "Enter your first name"
        },
        lastName: "Last Name",
        lastName: {
          placeholder: "Enter your last name"
        },
        institution: "Institution",
        institution: {
          placeholder: "Enter your institution name"
        },
        email: "Email",
        email: {
          placeholder: "Enter your email address"
        },
        phone: "Phone Number",
        phone: {
          placeholder: "Enter your phone number"
        },
        submit: "Submit",
        submitting: "Submitting...",
        success: {
          title: "Form submitted!",
          description: "We'll get in touch with you soon."
        },
        error: {
          title: "Submission error",
          description: "Please try again later."
        }
      },
      why: {
        title: "Why choose QSCIM?",
        implementation: "Fast and seamless implementation",
        support: "Dedicated support team",
        compliance: "Ensured regulatory compliance"
      }
    },
    footer: {
      copyright: "© 2024 QSCIM. All rights reserved."
    }
  },
  pt: {
    nav: {
      home: "Início",
      challenges: "Desafios",
      whatIsQSCIM: "O que é QSCIM?",
      howItWorks: "Como Funciona",
      benefits: "Benefícios",
      studentLifecycle: "Ciclo de Vida do Aluno",
      staffProvisioning: "Provisionamento de Colaboradores",
      integratedSystems: "Sistemas Integrados",
      security: "Segurança e Compliance",
      contact: "Contato"
    },
    hero: {
      badge: "Provisionamento Automatizado de Identidades",
      title: {
        qscim: "QSCIM",
        for: "para",
        schools: "Escolas",
        and: "e",
        universities: "Universidades"
      },
      subtitle: "Revolucionando o Provisionamento de Identidades",
      description: "Provisione e gerencie automaticamente identidades de usuários em todos os seus sistemas educacionais. Da matrícula à formatura, garanta acesso seguro e instantâneo aos recursos certos no momento certo.",
      badge: {
        automation: "Automação Completa",
        security: "Segurança Aprimorada",
        scalability: "Escalabilidade Ilimitada"
      },
      cta: "Solicitar Demo"
    },
    challenges: {
      title: "Principais Desafios",
      title: {
        education: "na Educação"
      },
      description: "Descubra os principais desafios enfrentados pelas instituições de ensino no gerenciamento de identidades digitais e como o QSCIM pode fornecer soluções eficazes.",
      volume: {
        title: "Alto Volume de Dados",
        description: "Gerenciar um grande volume de dados de alunos e funcionários pode ser complexo e propenso a erros, levando a ineficiências e riscos de segurança."
      },
      seasonality: {
        title: "Sazonalidade das Matrículas",
        description: "Os períodos de matrícula criam picos na demanda por recursos de TI, exigindo soluções escaláveis para lidar com o influxo de novas contas de usuário e solicitações de acesso."
      },
      diversity: {
        title: "Diversidade de Sistemas",
        description: "As instituições de ensino geralmente usam uma variedade de sistemas que não se comunicam entre si, dificultando a manutenção de acesso de usuário consistente e seguro em todas as plataformas."
      },
      scenario: {
        title: "Cenário de Impacto Financeiro",
        total: "Impacto financeiro anual estimado das ineficiências de gerenciamento de identidade em uma instituição de ensino típica.",
        operational: "Ineficiências Operacionais",
        lost: "Perda de Produtividade",
        compliance: "Penalidades de Compliance"
      }
    },
    whatIsQscim: {
      title: "O que é",
      title: {
        qscim: "QSCIM"
      },
      description: "QSCIM (Quantum School and Campus Identity Management) é uma solução abrangente projetada para automatizar e otimizar os processos de gerenciamento de identidade em instituições de ensino. Ele garante que alunos, professores e funcionários tenham o acesso certo aos recursos certos no momento certo, aumentando a segurança, a conformidade e a eficiência operacional.",
      protocol: {
        title: "Baseado no protocolo SCIM",
        standard: "Gerenciamento de identidade padronizado",
        faster: "Provisionamento mais rápido e eficiente",
        interoperability: "Melhor interoperabilidade entre sistemas",
        errors: "Redução de erros manuais"
      },
      automation: {
        title: "Automação Completa",
        description: "Automatize o provisionamento, desprovisionamento e gerenciamento de acesso de usuários em todos os seus sistemas, reduzindo o esforço manual e melhorando a precisão."
      }
    },
    howItWorks: {
      title: "Como",
      title: {
        works: "Funciona"
      },
      description: "O QSCIM integra-se perfeitamente com seus sistemas existentes para automatizar os processos de gerenciamento de identidade, garantindo acesso eficiente e seguro aos recursos.",
      step1: {
        title: "Fonte de Dados",
        description: "O QSCIM conecta-se às suas fontes de dados primárias, como sistemas SIS e HR, para coletar informações do usuário."
      },
      step2: {
        title: "Gateway QSCIM",
        description: "O Gateway QSCIM processa e transforma os dados, garantindo que sejam consistentes e precisos."
      },
      step3: {
        title: "Sistemas Alvo",
        description: "O QSCIM provisiona e gerencia automaticamente o acesso do usuário em todos os sistemas conectados, como LMS, e-mail e diretórios."
      },
      realtime: "Provisionamento em Tempo Real"
    },
    benefits: {
      title: "Benefícios para Instituições",
      title: {
        institutions: "Educacionais"
      },
      description: "O QSCIM oferece uma gama de benefícios que melhoram a segurança, a conformidade e a eficiência operacional para instituições de ensino.",
      automation: {
        title: "Automação Completa",
        realtime: "Provisionamento e desprovisionamento em tempo real",
        deprovisioning: "Desprovisionamento automatizado após a formatura ou partida",
        sync: "Sincronização automática de dados do usuário entre sistemas"
      },
      security: {
        title: "Segurança Aprimorada",
        rbac: "Controle de acesso baseado em função (RBAC)",
        audit: "Trilha de auditoria completa do acesso e alterações do usuário",
        compliance: "Conformidade com os requisitos regulatórios (FERPA, GDPR, etc.)"
      },
      efficiency: {
        title: "Eficiência Operacional",
        time: "Tempo reduzido gasto em tarefas manuais de provisionamento",
        errors: "Erros e inconsistências minimizados nos dados do usuário",
        scalability: "Escalabilidade aprimorada para lidar com os períodos de pico de matrícula"
      },
       metrics: {
        provisioning: "Tempo Médio de Provisionamento",
        compliance: "Precisão e Compliance de Dados",
        reduction: "Redução de Esforço Manual",
        systems: "Sistemas Integrados"
      }
    },
    studentLifecycle: {
      title: "Ciclo de Vida do",
      title: {
        student: "Aluno"
      },
      description: "O QSCIM automatiza o gerenciamento de identidade ao longo do ciclo de vida do aluno, desde a matrícula até a formatura, garantindo acesso seguro e eficiente aos recursos.",
      enrollment: {
        title: "Matrícula",
        description: "Criação automática de conta e provisionamento de acesso após a matrícula."
      },
      courseChange: {
        title: "Mudança de curso",
        description: "Ajustes de acesso automatizados quando os alunos mudam de curso."
      },
      graduation: {
        title: "Formatura",
        description: "Desprovisionamento automático de conta e revogação de acesso após a formatura."
      },
      semester: {
        title: "Novo semestre",
        description: "Processamento em lote de atualizações de conta e renovações de acesso no início de cada semestre."
      },
      exchange: {
        title: "Alunos de intercâmbio",
        description: "Provisionamento de conta temporária e gerenciamento de acesso para alunos de intercâmbio."
      },
      emergency: {
        title: "Suspensão de emergência",
        description: "Suspensão imediata do acesso em caso de ações disciplinares ou emergências."
      },
      instant: {
        title: "Acesso Imediato",
        description: "Os alunos ganham acesso imediato aos recursos essenciais após a matrícula, melhorando sua experiência de aprendizado e produtividade."
      }
    },
    staffProvisioning: {
      title: "Provisionamento de Professores e",
      title: {
        staff: "Colaboradores"
      },
      description: "O QSCIM agiliza o provisionamento de professores e funcionários, garantindo que eles tenham o acesso necessário para desempenhar suas funções de forma eficiente e segura.",
      professor: {
        title: "Professor Titular",
        lms: "Acesso ao Sistema de Gerenciamento de Aprendizagem (LMS)",
        grades: "Acesso ao sistema de envio de notas",
        labs: "Acesso a laboratórios e recursos de pesquisa",
        library: "Acesso a recursos de biblioteca digital",
        email: "Conta de e-mail da universidade"
      },
      admin: {
        title: "Equipe Administrativa",
        sis: "Acesso ao Sistema de Informações do Aluno (SIS)",
        hr: "Acesso ao sistema de Recursos Humanos (RH)",
        financial: "Acesso ao sistema de gestão financeira",
        reports: "Acesso a relatórios administrativos",
        email: "Conta de e-mail da universidade"
      },
      visiting: {
        title: "Professor Visitante",
        temporary: "Acesso temporário aos sistemas universitários",
        wifi: "Acesso à rede Wi-Fi do campus",
        lms: "Acesso limitado ao Sistema de Gerenciamento de Aprendizagem (LMS)",
        library: "Acesso a recursos de biblioteca digital",
        labs: "Acesso a laboratórios de pesquisa específicos"
      },
      accesses: "Acessos Comuns",
      flow: {
        title: "Fluxo de Provisionamento Automatizado",
        hiring: "Processo de Contratação",
        processing: "Processamento de Dados de RH",
        provisioning: "Provisionamento Automatizado de Contas",
        credentials: "Entrega de Credenciais"
      }
    },
    integratedSystems: {
      title: "Sistemas",
      title: {
        integrated: "Integrados"
      },
      description: "O QSCIM integra-se perfeitamente com uma variedade de sistemas comumente usados em instituições de ensino, garantindo gerenciamento de identidade consistente e seguro em todas as plataformas.",
      sis: "Sistemas SIS",
      lms: "LMS",
      directories: "Diretórios",
      others: "Outros Sistemas",
      others: {
        wifi: "Acesso Wi-Fi",
        labs: "Acesso ao Laboratório",
        access: "Controle de Acesso Físico",
        printing: "Serviços de Impressão"
      },
      realtime: "Integração em Tempo Real"
    },
    security: {
      title: "Segurança e",
      title: {
        compliance: "Compliance"
      },
      description: "O QSCIM garante os mais altos níveis de segurança e conformidade com os padrões da indústria, protegendo dados confidenciais e mantendo a adesão regulatória.",
      rbac: {
        title: "Acesso baseado em função",
        description: "O controle de acesso baseado em função (RBAC) garante que os usuários tenham apenas as permissões necessárias."
      },
      audit: {
        title: "Trilha de auditoria completa",
        description: "Uma trilha de auditoria abrangente rastreia todo o acesso e alterações do usuário para fins de segurança e conformidade."
      },
      tls: {
        title: "Criptografia TLS 1.3",
        description: "A criptografia de ponta a ponta com TLS 1.3 protege os dados em trânsito."
      },
      aes: {
        title: "Criptografia AES-256",
        description: "A criptografia AES-256 protege os dados em repouso."
      },
      compliance: {
        title: "Compliance Regulatória",
        ferpa: "Conformidade com a Lei de Direitos Educacionais e Privacidade da Família (FERPA).",
        lgpd: "Conformidade com a Lei Geral de Proteção de Dados (LGPD).",
        gdpr: "Conformidade com o Regulamento Geral de Proteção de Dados (GDPR).",
        soc2: "Conformidade com os padrões SOC 2."
      },
      layers: {
        title: "Segurança Multicamadas",
        mfa: "Autenticação Multifator (MFA)",
        rbac: "Controle de Acesso Baseado em Função (RBAC)",
        encryption: "Criptografia de Ponta a Ponta",
        monitoring: "Monitoramento em Tempo Real",
        logs: "Logs de Auditoria Detalhados"
      },
      metrics: {
        availability: "Disponibilidade do Sistema",
        response: "Tempo Médio de Resposta"
      }
    },
    contact: {
      title: "Solicite uma",
      title: {
        demo: "Demonstração"
      },
      description: "Entre em contato conosco para saber mais sobre como o QSCIM pode transformar o gerenciamento de identidade em sua instituição de ensino.",
      form: {
        firstName: "Nome",
        firstName: {
          placeholder: "Digite seu nome"
        },
        lastName: "Sobrenome",
        lastName: {
          placeholder: "Digite seu sobrenome"
        },
        institution: "Instituição",
        institution: {
          placeholder: "Digite o nome da sua instituição"
        },
        email: "Email",
        email: {
          placeholder: "Digite seu endereço de email"
        },
        phone: "Número de Telefone",
        phone: {
          placeholder: "Digite seu número de telefone"
        },
        submit: "Enviar",
        submitting: "Enviando...",
        success: {
          title: "Formulário enviado!",
          description: "Entraremos em contato em breve."
        },
        error: {
          title: "Erro no envio",
          description: "Tente novamente mais tarde."
        }
      },
      why: {
        title: "Por que escolher o QSCIM?",
        implementation: "Implementação rápida e perfeita",
        support: "Equipe de suporte dedicada",
        compliance: "Conformidade regulatória garantida"
      }
    },
    footer: {
      copyright: "© 2024 QSCIM. Todos os direitos reservados."
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { i18n: i18nInstance } = useTranslation();
  const [language, setLanguage] = useState(router.locale || 'en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || router.locale || 'en';
    setLanguage(storedLanguage);
    i18nInstance.changeLanguage(storedLanguage);
  }, [router.locale, i18nInstance]);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18nInstance.changeLanguage(language);
    router.push(router.pathname, router.pathname, { locale: language });
  }, [language, router, i18nInstance]);

  const t = (key: string, params: Record<string, any> = {}) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    if (typeof value === 'string') {
      Object.keys(params).forEach(paramKey => {
        const regex = new RegExp(`{{${paramKey}}}`, 'g');
        value = value.replace(regex, params[paramKey]);
      });
      return value;
    }

    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
