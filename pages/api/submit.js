
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, mensagem } = req.body;
    const webhookURL = 'https://hooks.zapier.com/hooks/catch/SEU_WEBHOOK_URL';

    try {
      await fetch(webhookURL, {
        method: 'POST',
        body: JSON.stringify({ nome, email, telefone, mensagem }),
        headers: { 'Content-Type': 'application/json' }
      });

      res.status(200).json({ message: 'Formulário enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar formulário.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
