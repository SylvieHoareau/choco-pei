import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../../../components/ContactForm';

// On mocke fetch avant chaque test
beforeEach(() => {
  vi.restoreAllMocks();
});

describe('ContactForm', () => {
  it('affiche correctement les champs du formulaire', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Votre nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Votre email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Votre message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/J'accepte la politique de confidentialité/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('envoie le formulaire avec succès', async () => {
    // Mock du fetch pour renvoyer une réponse OK
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as any);

    render(<ContactForm />);

    // On remplit les champs
    fireEvent.change(screen.getByLabelText(/Votre nom/i), { target: { value: 'Jean Dupont' } });
    fireEvent.change(screen.getByLabelText(/Votre email/i), { target: { value: 'jean@example.com' } });
    fireEvent.change(screen.getByLabelText(/Votre message/i), { target: { value: 'Bonjour !' } });
    fireEvent.click(screen.getByLabelText(/J'accepte la politique de confidentialité/i));

    // On soumet
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));

    // On attend que le message de succès apparaisse
    await waitFor(() => {
      expect(screen.getByText(/Votre message a été envoyé avec succès/i)).toBeInTheDocument();
    });
  });

  it('affiche un message d\'erreur si l\'envoi échoue', async () => {
    // Mock du fetch pour renvoyer une erreur
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Erreur serveur' }),
      })
    ) as any);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Votre nom/i), { target: { value: 'Jean Dupont' } });
    fireEvent.change(screen.getByLabelText(/Votre email/i), { target: { value: 'jean@example.com' } });
    fireEvent.change(screen.getByLabelText(/Votre message/i), { target: { value: 'Test' } });
    fireEvent.click(screen.getByLabelText(/J'accepte la politique de confidentialité/i));

    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));

    await waitFor(() => {
      expect(screen.getByText(/Erreur : Erreur serveur/i)).toBeInTheDocument();
    });
  });
});
