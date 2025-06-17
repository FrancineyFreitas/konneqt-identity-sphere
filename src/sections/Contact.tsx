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
      const response = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          institution: data.institution,
          email: data.email,
          phone: data.phone,
          language: language,
          timestamp: new Date().toISOString(),
          source: 'qscim-landing-page'
        }),
      });

      console.log('N8N webhook response status:', response.status);

      if (response.ok) {
        // Track form submission
        trackFormSubmission('contact_form');
        
        toast({
          title: t('contact.form.success.title') || "Formulário enviado!",
          description: t('contact.form.success.description') || "Entraremos em contato em breve.",
        });
        form.reset();
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
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
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('contact.title')} <span className="gradient-text">{t('contact.title.demo')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <div>
            <ScrollReveal>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.firstName')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.firstName.placeholder')} {...field} />
                        </FormControl>
                        <FormDescription>
                          {/* Add a description if needed */}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.lastName')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.lastName.placeholder')} {...field} />
                        </FormControl>
                        <FormDescription>
                          {/* Add a description if needed */}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.institution')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.institution.placeholder')} {...field} />
                        </FormControl>
                        <FormDescription>
                          {/* Add a description if needed */}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.email.placeholder')} {...field} />
                        </FormControl>
                        <FormDescription>
                          {/* Add a description if needed */}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.phone.placeholder')} {...field} />
                        </FormControl>
                        <FormDescription>
                          {/* Add a description if needed */}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </form>
              </Form>
            </ScrollReveal>
          </div>

          {/* Right side - Why choose QSCIM */}
          <div>
            <ScrollReveal delay={200}>
              <div className="bg-card border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{t('contact.why.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-konneqt-green">✅</span>
                    <span>{t('contact.why.implementation')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-konneqt-green">✅</span>
                    <span>{t('contact.why.support')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-konneqt-green">✅</span>
                    <span>{t('contact.why.compliance')}</span>
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
