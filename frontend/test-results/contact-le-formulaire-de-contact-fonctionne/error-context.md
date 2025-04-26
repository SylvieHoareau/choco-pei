# Test info

- Name: le formulaire de contact fonctionne
- Location: /home/vv/Documents/Projets-Web-Github/choco-pei/frontend/tests/e2e/contact.spec.ts:3:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Votre nom')

    at /home/vv/Documents/Projets-Web-Github/choco-pei/frontend/tests/e2e/contact.spec.ts:11:38
```

# Page snapshot

```yaml
- navigation:
  - link "Choco Péi":
    - /url: /
    - heading "Choco Péi" [level=1]
  - list:
    - listitem:
      - link "Accueil":
        - /url: /
    - listitem:
      - link "A propos":
        - /url: /about
    - listitem:
      - link "Produits":
        - /url: /products
    - listitem:
      - link "Contact":
        - /url: /contact
- main:
  - heading "Contactez-nous" [level=1]
  - main:
    - heading "Contactez-nous" [level=1]
    - text: "Nom :"
    - textbox "Nom :"
    - text: "Email :"
    - textbox "Email :"
    - text: "Votre adresse ne sera jamais partagée. Message :"
    - textbox "Message :"
    - checkbox "J'accepte la Politique de confidentialité"
    - text: J'accepte la
    - link "Politique de confidentialité":
      - /url: /privacy-policy
    - button "Envoyer"
- contentinfo:
  - paragraph: © 2025 Choco Péi. Tous droits réservés.
  - list:
    - listitem:
      - link "Mentions légales":
        - /url: /mentions
    - listitem:
      - link "Contact":
        - /url: /contact
  - paragraph:
    - text: Site créé avec amour par
    - link "Choco Péi":
      - /url: http://github.com
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('le formulaire de contact fonctionne', async ({ page }) => {
   4 |   // Aller à la page de contact
   5 |   await page.goto('http://localhost:3000/contact');
   6 |
   7 |   // Vérifie que le titre est bien présent
   8 |   await expect(page.getByTestId('contact-title')).toBeVisible();
   9 |
  10 |   // Remplir les champs du formulaire
> 11 |   await page.getByLabel('Votre nom').fill('Jean Dupont');
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12 |   await page.getByLabel('Votre email').fill('jean.dupont@example.com');
  13 |   await page.getByLabel('Votre message').fill('Bonjour, ceci est un test automatique.');
  14 |
  15 |   // Cliquer sur le bouton Envoyer
  16 |   await page.getByRole('button', { name: 'Envoyer' }).click();
  17 |
  18 |   // Vérifier qu'un message de succès est affiché
  19 |   await expect(page.getByText('Merci pour votre message')).toBeVisible();
  20 | });
  21 |
```