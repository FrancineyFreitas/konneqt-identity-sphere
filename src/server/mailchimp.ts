import axios from 'axios';
import { SubscribeData } from './validators';
import { ApiError } from './types';

export async function subscribeToMailchimp(data: SubscribeData) {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER) {
    throw new ApiError('Missing required Mailchimp configuration', 500);
  }

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  try {
    const response = await axios.post(
      url,
      {
        email_address: data.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: data.firstName,
          LNAME: data.lastName,
          PHONE: data.phone,
          INST: data.institution
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
        }
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 400 && error.response.data.title === 'Member Exists') {
        throw new ApiError('Este email já está registrado.', 400);
      }
      throw new ApiError(
        error.response.data.detail || 'Erro ao se inscrever na newsletter',
        error.response.status
      );
    }
    throw new ApiError('Erro ao conectar com o servidor', 500);
  }
} 