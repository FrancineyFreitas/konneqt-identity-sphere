import axios from 'axios';
import { ContactFormData } from './validations';

const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

if (!N8N_WEBHOOK_URL) {
  throw new Error('N8N webhook URL not configured');
}

// After the check, we know it's a string
const WEBHOOK_URL: string = N8N_WEBHOOK_URL;

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await axios.post(WEBHOOK_URL, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Erro ao enviar formulário');
    }
    throw new Error('Erro ao conectar com o servidor');
  }
} 