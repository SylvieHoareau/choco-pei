// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Champs manquants' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou autre fournisseur
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // Ton adresse de réception
            subject: `Nouveau message de ${name}`,
            text: message,
            html: `<p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p>${message}</p>`,
        });

        return res.status(200).json({ message: 'Message envoyé' });
    } catch (error) {
        console.error('Erreur d’envoi :', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
}
