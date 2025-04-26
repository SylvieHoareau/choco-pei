import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour le port 465, false pour les autres
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurer le contenu de l'email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Expéditeur
      to: process.env.CONTACT_EMAIL, // Destinataire
      subject: 'Nouveau message de contact', // Sujet
      text: message, // Contenu en texte brut
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong> ${message}</p>`, // Contenu en HTML
    });

    return res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    // console.error('Erreur lors de l\'envoi de l\'email :', error);
    return res.status(500).json({ message: 'Erreur interne du serveur' });
  }
}