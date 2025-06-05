import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome muito longo'),
  lastName: z.string()
    .min(2, 'Sobrenome deve ter pelo menos 2 caracteres')
    .max(50, 'Sobrenome muito longo'),
  institution: z.string()
    .min(2, 'Nome da instituição deve ter pelo menos 2 caracteres')
    .max(100, 'Nome da instituição muito longo'),
  email: z.string()
    .email('Email inválido')
    .min(5, 'Email deve ter pelo menos 5 caracteres')
    .max(100, 'Email muito longo'),
  phone: z.string()
    .min(8, 'Telefone deve ter pelo menos 8 dígitos')
    .max(20, 'Telefone muito longo')
    .regex(/^[+]?[\d\s()-]{8,}$/, 'Formato de telefone inválido. Use apenas números, espaços, +, -, ou ()')
    .transform(val => val.replace(/\s+/g, ' ').trim()) // Normalize spaces
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 