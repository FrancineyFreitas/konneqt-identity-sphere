import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '../components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useToast } from '../components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { trackFormSubmission } from '../contexts/TrackingContext';
import { submitContactForm } from '../api/n8n';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  institution: z.string().min(2, {
    message: "Institution name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      institution: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form submission started with data:', data);

    try {
      await submitContactForm(data);
      
      // Track form submission
      trackFormSubmission('contact_form');
      
      toast({
        title: t('contact.form.success.title') || "Formulário enviado!",
        description: t('contact.form.success.description') || "Entraremos em contato em breve.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.form.error.title') || "Erro no envio",
        description: t('contact.form.error.description') || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full animate-pulse delay-2000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 rounded-full animate-pulse delay-500" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 rounded-full animate-pulse delay-700" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 rounded-full animate-pulse delay-1200" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full animate-pulse delay-800" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-16 left-2/3 w-1 h-1 rounded-full animate-pulse delay-400" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-52 left-1/6 w-1 h-1 rounded-full animate-pulse delay-900" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-16 left-3/4 w-1 h-1 rounded-full animate-pulse delay-600" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-48 right-1/6 w-1 h-1 rounded-full animate-pulse delay-1100" style={{ backgroundColor: '#637ef2' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white font-inter">
              <span className="font-light">{t('contact.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('contact.title.demo')}</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-inter">
              {t('contact.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <div>
            <ScrollReveal>
              <div className="bg-slate-800/30 backdrop-blur-sm transition-all duration-300 rounded-2xl p-8 shadow-lg relative overflow-hidden" style={{ border: '1px solid #2f2f2f' }}>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-inter text-sm">{t('contact.form.firstName')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.firstName.placeholder')} 
                              {...field} 
                              className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-inter text-sm">{t('contact.form.lastName')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.lastName.placeholder')} 
                              {...field} 
                              className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-inter text-sm">{t('contact.form.institution')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.institution.placeholder')} 
                              {...field} 
                              className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-inter text-sm">{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.email.placeholder')} 
                              {...field} 
                              className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-inter text-sm">{t('contact.form.phone')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.phone.placeholder')} 
                              {...field} 
                              className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-center">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        size="lg"
                        className="bg-transparent border border-blue-500/40 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg hover:bg-blue-500/10 hover:border-blue-400 transform hover:scale-105 transition-all duration-300 font-inter"
                      >
                        {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Why choose QSCIM */}
          <div>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 backdrop-blur-sm transition-all duration-300 rounded-2xl p-6 shadow-lg" style={{ border: '1px solid #2f2f2f' }}>
                <h3 className="text-xl font-semibold mb-4 text-white font-inter">{t('contact.why.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 text-lg">✓</span>
                    <span className="text-slate-300">{t('contact.why.implementation')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 text-lg">✓</span>
                    <span className="text-slate-300">{t('contact.why.support')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 text-lg">✓</span>
                    <span className="text-slate-300">{t('contact.why.compliance')}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
