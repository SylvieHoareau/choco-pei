'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/mentions.module.css";

const Mentions: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main} id="main-content" role="main">
        <header className={styles.header}>
          <h1>Mentions Légales</h1>
        </header>

        <section className={styles.section} aria-labelledby="editeur">
          <h2 id="editeur">Editeur du site</h2>
          <p>
            Le site{" "}
            <a
              href="https://www.chocopei.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chocopei.com
            </a>{" "}
            est édité par <strong>Choco Péi</strong>, société à responsabilité
            limitée (SARL) au capital de 5000 euros, immatriculée au registre du
            commerce et des société sous le numéro SIRET
          </p>
          <address>
            Siège social: 123 rue du chocolat <br></br> 
            Responsable de publication : M. Carly CHAPLIN
            <a href="mailto:email@example.com">email@example.com</a>
            <a href="tel:+12 345 67 89 00">+12 34 56 78 90</a>
          </address>
        </section>

        <section className={styles.section} aria-labelledby="hebergeur">
          <h2 id="hebergeur">Hébergeur</h2>
          <p>
            Le site est hébergé par Vercel, situé à Vercel Inc, 650 California St, San Francisco, CA 94108, États-Unis, 
            téléphone:{" "}
            <a href="tel:06 31 07 34 26">06 31 07 34 26</a>
          </p>
        </section>

        <section className={styles.section} aria-labelledby="propriete">
          <h2 id="propriete">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site, y compris les textes, images
          </p>
        </section>

        <section className={styles.section} aria-labelledby="donnees">
          <h2 id="donnees">Protection des données personnelles</h2>
          <p>
            Conformément à la réglementation sur la protection des données
            personnelles, nous collectons et traitons les informations
            nécessaires à l&apos;utilisation de notre site, telles que les
            informations de contact
          </p>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, de
            suppression et d&apos;opposition aux données personnelles vous
            concernant, que vous pouvez exercer en nous contactant par email à{" "}
            <a href="mailto:email@example.com">email@example.com</a>.
          </p>
          <p>
            Nous utilisons également des cookies pour améliorer votre expérience
            utilisateur. Pour plus d&apos;informations, consultez notre
            politique de confidentialité.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="responsabilite">
          <h2 id="responsabilite">Limitation de responsabilité</h2>
          <p>
            L&apos;éditeur du site ne saurait être tenu responsable des erreurs
            ou des interruptions de service. Le contenu de ce site est donné à
            titre informatif et peut être modifié sans préavis.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Mentions;
