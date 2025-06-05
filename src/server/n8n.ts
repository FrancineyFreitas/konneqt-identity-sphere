import axios from 'axios';
import dotenv from 'dotenv';
import { SubscribeData } from './validators';
import { ApiError } from './types';

dotenv.config();

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://automation.cloud.konneqt.io/webhook-test/contact-form';

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