
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const Benefits = () => {
  const benefits = [
    {
      title: 'Automação Completa',
      items: ['Provisionamento em tempo real', 'Desprovisionamento seguro', 'Sincronização em tempo real'],
      icon: '🤖',
      color: 'konneqt-blue'
    },
    {
      title: 'Segurança Avançada',
      items: ['Controle  de acesso baseado em função', 'Auditoria completa de acessos', 'Conformidade com FERPA/LGPD'],
      icon: '🔒',
      color: 'konneqt-purple'
    },
    {
      title: 'Eficiência Operacional',
      items: ['Economia de tempo', 'Eliminação de erros humanos', 'Escalabilidade ilimitada'],
      icon: '📈',
      color: 'konneqt-green'
    }
  ];

  const comparison = [
    { metric: 'Tempo', before: '3–5 dias', after: '5 minutos', improvement: '99%' },
    { metric: 'Erros', before: '45%', after: '< 1%', improvement: '97%' },
    { metric: 'Custo anual', before: 'US$ 50.000', after: 'US$ 10.000', improvement: '80%' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios para <span className="gradient-text">Instituições Educacionais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme a gestão de identidades com resultados mensuráveis
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-konneqt-blue/10 to-konneqt-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Antes vs Depois</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {comparison.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">{item.metric}</h4>
                  
                  <div className="space-y-3">
                    <div className="text-red-500">
                      <span className="text-sm text-muted-foreground">Antes: </span>
                      <span className="font-semibold">{item.before}</span>
                    </div>
                    
                    <div className="text-2xl">→</div>
                    
                    <div className="text-green-500">
                      <span className="text-sm text-muted-foreground">Depois: </span>
                      <span className="font-semibold">{item.after}</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-konneqt-green to-konneqt-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                      -{item.improvement} melhoria
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Benefits;
