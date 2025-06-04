import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';

const WhatIsQSCIM = () => {
  const capabilities = [
    { name: 'Joiner Events', color: 'bg-konneqt-green/10' },
    { name: 'Mover Events', color: 'bg-konneqt-blue/10' },
    { name: 'Leaver Events', color: 'bg-konneqt-purple/10' },
    { name: 'Sync Attributes', color: 'bg-konneqt-orange/10' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold">
                O que é o <span style={{ color: '#1ee391' }}>QSCIM</span>?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Solução de onboarding de usuários que importa dados de sistemas SIS, RH, CRM 
                para diretórios como AD, Azure AD, Google e Okta e muitos outros.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Baseado no protocolo SCIM</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                    Padrão aberto para gestão de identidades
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-blue rounded-full mr-3"></span>
                    Provisionamento mais rápido e barato
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-purple rounded-full mr-3"></span>
                    Interoperabilidade entre sistemas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-orange rounded-full mr-3"></span>
                    Redução de erros manuais
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={300}>
              <h3 className="text-2xl font-semibold mb-6">Capacidades Principais</h3>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <ScrollReveal key={index} delay={400 + index * 100}>
                  <div className={`${capability.color} rounded-lg p-6 text-center hover:shadow-md transition-shadow`}>
                    <span className="text-xl font-medium">
                      {capability.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={800}>
              <div className="bg-gradient-to-br from-konneqt-green/10 to-konneqt-blue/10 rounded-xl p-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-lg font-semibold mb-2">Automação Inteligente</h4>
                  <p className="text-sm text-muted-foreground">
                    Provisiona e desprovisiona usuários automaticamente com base em eventos
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsQSCIM;
