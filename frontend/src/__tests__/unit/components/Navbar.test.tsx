// __tests__/Navbar.test.tsx
import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../../components/Navbar';

// Mock de `next/link`
vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href}>{children}</a>,
}));

describe('Navbar', () => {
  it('affiche le titre Choco Péi', () => {
    render(<Navbar />);
    const titleElement = screen.getByText('Choco Péi');
    expect(titleElement).not.toBeNull(); // On vérifie qu'il existe
  });

  it('affiche les liens de navigation', () => {
    render(<Navbar />);
    expect(screen.getByText('Accueil')).not.toBeNull();
    expect(screen.getByText('A propos')).not.toBeNull();
    expect(screen.getByText('Produits')).not.toBeNull();
    expect(screen.getByText('Contact')).not.toBeNull();
  });

  it('ouvre le menu au clic sur le hamburger', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button');
    fireEvent.click(hamburger);
    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });

  it('ferme le menu si on clique à nouveau sur le hamburger', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button');
    fireEvent.click(hamburger); // ouvre
    fireEvent.click(hamburger); // referme
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');
  });

  it('peut être activé avec la touche espace', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button');
    fireEvent.keyDown(hamburger, { key: ' ', code: 'Space' });
    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });
});
