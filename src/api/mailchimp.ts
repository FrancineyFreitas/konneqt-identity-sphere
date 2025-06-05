import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

interface SubscribeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
}

export async function subscribeToMailchimp(data: SubscribeData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/subscribe`,
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Erro ao se inscrever na newsletter');
    }
    throw new Error('Erro ao conectar com o servidor');
  }
} 