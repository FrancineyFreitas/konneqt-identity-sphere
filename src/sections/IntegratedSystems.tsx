
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const IntegratedSystems = () => {
  const { t } = useLanguage();

  const systemCategories = [
    {
      title: t('integratedSystems.sis'),
      systems: ['Banner', 'PeopleSoft', 'Ellucian', 'Campus Solution'],
      icon: '🏫',
      color: 'konneqt-blue'
    },
    {
      title: t('integratedSystems.lms'),
      systems: ['Moodle', 'Canvas', 'Blackboard', 'Google Classroom'],
      icon: '📚',
      color: 'konneqt-purple'
    },
    {
      title: t('integratedSystems.directories'),
      systems: ['Azure AD', 'Google Workspace', 'Active Directory', 'Okta'],
      icon: '📁',
      color: 'konneqt-green'
    },
    {
      title: t('integratedSystems.others'),
      systems: [
        t('integratedSystems.others.wifi'), 
        t('integratedSystems.others.labs'), 
        t('integratedSystems.others.access'), 
        t('integratedSystems.others.printing')
      ],
      icon: '🔗',
      color: 'konneqt-orange'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('integratedSystems.title')} <span className="gradient-text">{t('integratedSystems.title.integrated')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('integratedSystems.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-konneqt-green/30 dark:hover:border-konneqt-green/60">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.systems.map((system, systemIndex) => (
                    <Badge 
                      key={systemIndex} 
                      variant="secondary" 
                      className="w-full justify-center py-2 text-xs hover:bg-konneqt-blue/10 transition-colors"
                    >
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-konneqt-blue/10 to-konneqt-green/10 rounded-full px-8 py-4">
              <span className="text-2xl">🔄</span>
              <span className="text-lg font-semibold">{t('integratedSystems.realtime')}</span>
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntegratedSystems;
