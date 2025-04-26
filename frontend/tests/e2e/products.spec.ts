import { test, expect } from '@playwright/test';

test('La page Products affiche la liste des produits', async ({ page }) => {
  // 1. Va sur la page /products
  await page.goto('http://localhost:3000/products');

  // 2. Vérifie que le titre est bien affiché
  const heading = page.getByRole('heading', { name: /nos produits/i });
  await expect(heading).toBeVisible();

  // 3. Vérifie qu'il y a au moins 1 produit affiché
  const productCards = page.locator('article[aria-label^="Produit"]');
  const count = await productCards.count();
  expect(count).toBeGreaterThan(0);

  // 4. Optionnel : Vérifie le contenu d'un des produits (si tu connais un nom)
  // Exemple : vérifier que "Chocolat noir 70%" existe
  // const specificProduct = page.getByRole('heading', { name: /chocolat noir 70%/i });
  // await expect(specificProduct).toBeVisible();
});

test('Affiche un message quand aucun produit n\'est disponible', async ({ page }) => {
    // Intercepter l'appel API /api/products et retourner une réponse vide
    await page.route('**/api/products', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([]), // <- simulate no products
      });
    });
  
    await page.goto('http://localhost:3000/products?mock=empty', { waitUntil: 'networkidle'});
  
    // Vérifier que le message "Aucun produit disponible" est affiché
    await expect(page.getByText('Aucun produit disponible')).toBeVisible();
});
