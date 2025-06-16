
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '@/hooks/use-toast';
import { submitContactForm } from '../api/n8n';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
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
              {t('contact.title')} <span className="gradient-text">{t('contact.title.demo')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('contact.description')}
            </p>
            <div className="flex justify-center items-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-konneqt-green/20 to-konneqt-blue/20 rounded-full px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-3xl">🎯</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">{t('contact.personalized')}</div>
                  <div className="text-lg font-semibold">{t('contact.adapted')}</div>
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
                        {t('contact.form.firstName')}
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder={t('contact.form.firstName.placeholder')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">
                        {t('contact.form.lastName')}
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-2 border-2 focus:border-konneqt-blue"
                        placeholder={t('contact.form.lastName.placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="institution" className="text-sm font-semibold">
                      {t('contact.form.institution')}
                    </Label>
                    <Input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder={t('contact.form.institution.placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">
                      {t('contact.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      {t('contact.form.phone')}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-konneqt-blue"
                      placeholder={t('contact.form.phone.placeholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white py-6 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t('contact.why.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-green rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>{t('contact.why.implementation')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-purple rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>{t('contact.why.support')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-konneqt-orange rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    <span>{t('contact.why.compliance')}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
