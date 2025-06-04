
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const Security = () => {
  const securityFeatures = [
    {
      title: 'Acesso baseado em função',
      description: 'Controle granular de permissões por perfil',
      icon: '👥',
      color: 'konneqt-blue'
    },
    {
      title: 'Trilha de auditoria completa',
      description: 'Registro detalhado de todas as ações',
      icon: '📋',
      color: 'konneqt-purple'
    },
    {
      title: 'Criptografia TLS 1.3',
      description: 'Dados protegidos em trânsito',
      icon: '🔐',
      color: 'konneqt-green'
    },
    {
      title: 'Criptografia AES-256',
      description: 'Dados protegidos em repouso',
      icon: '🛡️',
      color: 'konneqt-orange'
    }
  ];

  const compliance = [
    { standard: 'FERPA', description: 'Proteção de dados educacionais' },
    { standard: 'LGPD', description: 'Conformidade brasileira' },
    { standard: 'GDPR', description: 'Regulamentação europeia' },
    { standard: 'SOC 2', description: 'Segurança e disponibilidade' }
  ];

  const securityLayers = [
    'Autenticação multifator (MFA)',
    'Controle de acesso por função',
    'Criptografia',
    'Monitoramento em tempo real',
    'Logs e relatórios de auditoria'
  ];

  const metrics = [
    { metric: '99,9%', label: 'Disponibilidade' },
    { metric: '<1s', label: 'Tempo de resposta' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Segurança e <span className="gradient-text">Conformidade</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proteção robusta com os mais altos padrões de segurança
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Conformidade Regulatória</h3>
              <div className="space-y-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-konneqt-blue to-konneqt-purple rounded-lg flex items-center justify-center text-white font-bold">
                      {item.standard.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.standard}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-konneqt-green/10 to-konneqt-orange/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Camadas de Segurança</h3>
              <div className="space-y-3">
                {securityLayers.map((layer, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                    <span className="text-sm">{layer}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-konneqt-green">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Security;
