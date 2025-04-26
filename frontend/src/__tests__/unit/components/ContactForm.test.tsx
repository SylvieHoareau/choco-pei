import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import ContactForm from '@/components/ContactForm';

// Mock de useForm de Formspree
vi.mock('@formspree/react', () => ({
  useForm: () => [
    { submitting: false, succeeded: false, errors: [] },
    vi.fn(), // handleSubmit
  ],
  ValidationError: () => null,
}));

describe('ContactForm', () => {
  it('affiche le formulaire de contact', () => {
    render(<ContactForm />);

    // Vérifie que les champs sont présents
    expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Politique de confidentialité/i)).toBeInTheDocument();

    // Vérifie que le bouton Envoyer est présent
    expect(screen.getByRole('button', { name: /Envoyer/i })).toBeInTheDocument();
  });

  it('permet de remplir le formulaire', async () => {
    render(<ContactForm />);

    // Remplir les champs
    fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Jean Dupont' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jean.dupont@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Ceci est un message de test.' } });
    fireEvent.click(screen.getByLabelText(/Politique de confidentialité/i));

    // Vérifie que les champs contiennent la bonne valeur
    expect(screen.getByLabelText(/Nom/i)).toHaveValue('Jean Dupont');
    expect(screen.getByLabelText(/Email/i)).toHaveValue('jean.dupont@example.com');
    expect(screen.getByLabelText(/Message/i)).toHaveValue('Ceci est un message de test.');
  });
});
