export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // Simpen data ke memory sementara (buat demo aja)
    global.webhookMessages = global.webhookMessages || [];
    global.webhookMessages.push({
      time: new Date().toLocaleTimeString(),
      content: data.message?.text || JSON.stringify(data),
    });

    console.log('📩 Webhook diterima:', data);

    return res.status(200).json({ status: 'ok' });
  } else if (req.method === 'GET') {
    // Buat ngecek data lewat browser
    return res.status(200).json(global.webhookMessages || []);
  } else {
    return res.status(405).end();
  }
}
