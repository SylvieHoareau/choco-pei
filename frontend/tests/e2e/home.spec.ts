import { test, expect } from '@playwright/test';

test('La page d\'accueil affiche le titre Choco Péi', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const title = await page.getByRole('heading', { name: /choco péi/i });
  await expect(title).toBeVisible();
});

test('Le menu de navigation contient les liens principaux', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('navigation').getByRole('link', { name: 'Accueil', exact: true })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Produits', exact: true })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
});
