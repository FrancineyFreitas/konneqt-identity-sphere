
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
}

export async function submitContactForm(data: ContactFormData) {
  const webhookUrl = 'https://automation.cloud.konneqt.io/webhook/qscim-education';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Adiciona modo no-cors para evitar problemas de CORS
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        institution: data.institution,
        timestamp: new Date().toISOString(),
        source: 'QSCIM Landing Page'
      }),
    });

    // Com no-cors, não conseguimos verificar o status da resposta
    // Assumimos que a requisição foi enviada com sucesso
    console.log('Dados enviados para n8n webhook');
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar dados para n8n:', error);
    throw new Error('Erro ao enviar formulário. Tente novamente em alguns instantes.');
  }
}
