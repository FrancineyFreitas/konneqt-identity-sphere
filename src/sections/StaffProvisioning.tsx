
import ScrollReveal from '../components/ScrollReveal';

const StaffProvisioning = () => {
  const profiles = [
    {
      title: 'Professor Titular',
      accesses: ['LMS', 'Sistema de notas', 'Laboratórios', 'Biblioteca', 'E-mail'],
      icon: '👨‍🏫',
      color: 'konneqt-blue'
    },
    {
      title: 'Funcionário Administrativo',
      accesses: ['SIS', 'Sistema RH', 'Financeiro', 'Relatórios', 'E-mail'],
      icon: '👩‍💼',
      color: 'konneqt-purple'
    },
    {
      title: 'Professor Visitante',
      accesses: ['Acesso temporário com expiração automática', 'WiFi Guest', 'LMS Limitado', 'Biblioteca', 'Labs Específicos'],
      icon: '👨‍🎓',
      color: 'konneqt-green'
    }
  ];

  const flowSteps = [
    { step: '1', title: 'Contratação no RH', icon: '📋' },
    { step: '2', title: 'Processamento pelo QSCIM', icon: '⚙️' },
    { step: '3', title: 'Provisionamento', icon: '👤' },
    { step: '4', title: 'Envio de credenciais', icon: '📧' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Provisionamento de <span className="gradient-text">Professores e Funcionários</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gestão automatizada para todos os tipos de colaboradores
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="bg-card border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{profile.icon}</div>
                  <h3 className="text-xl font-semibold">{profile.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Acessos Automáticos:
                  </h4>
                  <ul className="space-y-2">
                    {profile.accesses.map((access, accessIndex) => (
                      <li key={accessIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3 flex-shrink-0"></span>
                        {access}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Fluxo de Provisionamento</h3>
            
            <div className="grid sm:grid-cols-4 gap-6">
              {flowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h4 className="text-sm font-semibold">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StaffProvisioning;
