'use client';

import { useState } from 'react';
import Link from "next/link";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de l\'envoi du message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Une erreur est survenue');
    }
  };

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.divContainer}>
          <h1 data-testid="contact-title">Contactez-nous</h1>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label htmlFor="name">Nom : </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              aria-label="Votre nom"
              aria-describedby="name-help"
              required 
            />

            <label htmlFor="email">Email : </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Votre email"
              aria-describedby="email-help"
              required
            />
            <small id="email-help">
              Votre adresse ne sera jamais partagée.
            </small>

            <label htmlFor="message">Message : </label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Votre message"
              aria-describedby="message-help"
              required 
            />

            <input 
              type="checkbox" 
              id="privacy" 
              name="privacy"
              aria-label="J'accepte la politique de confidentialité"
              aria-describedby="privacy-help" 
              required 
            />
            <label htmlFor="privacy">
              J&apos;accepte la{" "}
              <Link href="/privacy-policy">Politique de confidentialité</Link>
            </label>

            <button
              type="submit"
              className={styles.submitButton}
              aria-label="Envoyer le formulaire"
              data-testid="submit-button"
            >
              {status === 'loading' ? 'Envoi...' : 'Envoyer' }
            </button>

            {status === 'success' && (
              <p className={styles.successMessage}>Votre message a été envoyé avec succès !</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMessage}>Erreur : {errorMessage}</p>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactForm;