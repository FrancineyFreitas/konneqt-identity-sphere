import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/api';
import { contactFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '@/lib/validations';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await submitContactForm(data);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar uma demonstração.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: error instanceof Error ? error.message : "Tente novamente em alguns instantes.",
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

        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <Card className="shadow-xl border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold">
                        Nome *
                      </Label>
                      <Input
                        id="firstName"
                        {...register('firstName')}
                        type="text"
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder="Seu nome"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">
                        Sobrenome *
                      </Label>
                      <Input
                        id="lastName"
                        {...register('lastName')}
                        type="text"
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder="Seu sobrenome"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="institution" className="text-sm font-semibold">
                      Nome da instituição *
                    </Label>
                    <Input
                      id="institution"
                      {...register('institution')}
                      type="text"
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder="Nome da sua instituição"
                    />
                    {errors.institution && (
                      <p className="mt-1 text-sm text-red-500">{errors.institution.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      {...register('email')}
                      type="email"
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder="seu.email@instituicao.edu.br"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Telefone *
                    </Label>
                    <div className="relative">
                      <Input
                        id="phone"
                        {...register('phone')}
                        type="tel"
                        className="mt-2 border-2 focus:border-konneqt-blue pl-[4.5rem]"
                        placeholder="123 456 7890"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        +Int
                      </div>
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                    <p className="mt-1 text-xs text-muted-foreground">
                      Exemplo: +1 234 567 8900 ou +55 11 98765-4321
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white py-6 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Demonstração'}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-konneqt-green font-semibold">50% OFF</span>
                      <span>no primeiro ano para instituições educacionais</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
