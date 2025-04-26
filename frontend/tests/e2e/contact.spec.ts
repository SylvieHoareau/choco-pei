import { test, expect } from '@playwright/test';

test('le formulaire de contact fonctionne', async ({ page }) => {
  // Aller à la page de contact
  await page.goto('http://localhost:3000/contact');

  // Vérifie que le titre est bien présent
  await expect(page.getByTestId('contact-title')).toBeVisible();

  // Remplir les champs du formulaire
  await page.getByLabel('Nom :').fill('Jean Dupont');
  await page.getByLabel('Email :').fill('jean.dupont@example.com');
  await page.getByLabel('Message :').fill('Bonjour, ceci est un test automatique.');

  // Cliquer sur le bouton Envoyer
  await page.getByRole('button', { name: 'Envoyer' }).click();

  // Vérifier qu'un message de succès est affiché
  await expect(page.getByText('Merci pour votre message')).toBeVisible();
});
