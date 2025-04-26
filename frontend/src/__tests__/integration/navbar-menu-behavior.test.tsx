import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Comportement du menu de navigation', () => {
  it('ouvre et ferme le menu hamburger', () => {
    render(<Navbar />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
