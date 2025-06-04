import { z } from 'zod';

const subscribeSchema = z.object({
  firstName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  lastName: z.string().min(2, 'Sobrenome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone deve estar no formato (99) 99999-9999'),
  institution: z.string().min(2, 'Nome da instituição deve ter pelo menos 2 caracteres')
});

export type SubscribeData = z.infer<typeof subscribeSchema>;

export function validateSubscribeData(data: unknown): SubscribeData {
  try {
    return subscribeSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Dados inválidos');
  }
} 