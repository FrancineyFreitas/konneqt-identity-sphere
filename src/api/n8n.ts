
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
}

export async function submitContactForm(data: ContactFormData) {
  const webhookUrl = 'https://automation.cloud.konneqt.io/webhook/form-contact';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao enviar dados para n8n:', error);
    throw new Error('Erro ao enviar formulário. Tente novamente em alguns instantes.');
  }
}
