import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '@/hooks/use-toast';
import { submitContactForm } from '../api/n8n';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    institution: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      
      toast({
        title: "Solicitação enviada!",
        description: "Sua solicitação foi enviada com sucesso. Entraremos em contato em breve para agendar uma demonstração.",
        duration: 5000,
      });

      setFormData({
        firstName: '',
        lastName: '',
        institution: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Erro no envio:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Houve um problema ao enviar sua solicitação. Tente novamente em alguns instantes.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite uma <span className="gradient-text">Demonstração</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Descubra como o QSCIM pode transformar a gestão de identidades da sua instituição
            </p>
            <div className="flex justify-center items-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-konneqt-green/20 to-konneqt-blue/20 rounded-full px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-3xl">🎯</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Demonstração personalizada</div>
                  <div className="text-lg font-semibold">Adaptada à sua instituição</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <Card className="shadow-xl border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold">
                        Nome *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">
                        Sobrenome *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder="Seu sobrenome"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="institution" className="text-sm font-semibold">
                      Nome da instituição *
                    </Label>
                    <Input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder="Nome da sua instituição"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder="seu.email@instituicao.edu.br"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Telefone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white py-6 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Demonstração'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Por que escolher o QSCIM?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-green rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>Implementação rápida e segura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-blue rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>ROI comprovado em 3 meses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-purple rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>Suporte especializado 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-orange rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>Conformidade total com LGPD</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-konneqt-green/20 to-konneqt-green/30 border-2 border-konneqt-green rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-konneqt-green via-green-400 to-konneqt-green"></div>
                <div className="text-5xl font-black text-konneqt-white mb-2 animate-pulse">50% OFF</div>
                <div className="text-lg font-bold text-konneqt-green mb-2">No primeiro ano de implementação</div>
                <div className="text-sm font-semibold text-konneqt-green/80">Para instituições educacionais</div>
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-20">🎓</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
