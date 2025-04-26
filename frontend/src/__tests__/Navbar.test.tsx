import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../test-utils/createMockRouter'; // à créer ci-dessous

describe('Navbar', () => {
  it('affiche le titre de la marque', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );
    expect(screen.getByText('Choco Péi')).toBeInTheDocument();
  });

  it('ouvre et ferme le menu hamburger', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    const hamburger = screen.getByRole('button', { name: /ouvrir le menu/i });
    fireEvent.click(hamburger);
    expect(screen.getByText('Accueil')).toBeVisible();

    fireEvent.click(hamburger);
    expect(screen.getByText('Accueil')).not.toHaveClass('show'); // si ta classe CSS toggle l'affichage
  });

  it('navigue vers A propos', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    const link = screen.getByRole('link', { name: /a propos/i });
    expect(link).toHaveAttribute('href', '/about');
  });
});
