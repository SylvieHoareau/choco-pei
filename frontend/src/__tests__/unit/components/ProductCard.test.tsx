// src/__tests__/unit/components/ProductCard.test.tsx
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

// Mock de next/image pour les tests
vi.mock('next/image', () => ({
    __esModule: true,
    default: ({ alt }: { alt: string }) => <div data-testid="mocked-image" aria-label={alt} />,
}));

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: 1,
    name: 'Chocolat Noir',
    description: 'Délicieux chocolat noir à 70% de cacao.',
    price: '4,99€',
    image: '/images/chocolat-noir.jpg',
  };

  it('affiche correctement les informations du produit', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mockProduct.name })).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByLabelText(`Prix: ${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  });

  it('affiche un placeholder si aucune image n\'est fournie', () => {
    const productWithoutImage = { ...mockProduct, image: '' };
    render(<ProductCard product={productWithoutImage} />);

    expect(screen.getByText('Image indisponible')).toBeInTheDocument();
  });
});
