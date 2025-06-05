import axios from 'axios';
import { SubscribeData } from './validators';
import { ApiError } from './types';

const N8N_WEBHOOK_URL = import.meta.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://automation.cloud.konneqt.io/webhook/contact-form';

export async function submitToN8N(data: SubscribeData) {
  try {
    const response = await axios.post(
      N8N_WEBHOOK_URL,
      {
        email_address: data.email,
        merge_fields: {
          FNAME: data.firstName,
          LNAME: data.lastName,
          PHONE: data.phone,
          INST: data.institution
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new ApiError(
        error.response.data?.message || 'Erro ao processar sua solicitação',
        error.response.status || 500
      );
    }
    throw new ApiError('Erro ao conectar com o servidor', 500);
  }
}
