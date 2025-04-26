'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from '../styles/privacy-policy.module.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Politique de confidentialité</h1>
                <p>Chez <strong>Choco Péi</strong>, nous nous engageons à protéger et à respecter vos données personnelles.</p>
                
                <h2>1. Données collectées</h2>
                <p>Nous collectons les données suivantes : </p>
                <ul>
                    <li><strong>Informations que vous fournissez directement :</strong>Lorsque vous remplissez un formulaire de contact, créez un compte ou passez une commande, nous collectons des informations telles que votre nom, adresse email, adresse postale et numéro de téléphone.</li>
                    <li><strong>Informations collectées automatiquement :</strong>Lorsque vous visitez notre site, nous collectons des données relatives à votre navigation, telles que votre adresse IP, le type de navigateur, les pages visitées et la durée de votre visite.</li>
                    <li><strong>Cookies :</strong>Nous utilisons des cookies pour améliorer votre expérience sur notre site.</li>
                </ul>
                
                <h2>2. Utilisation des données</h2>
                <p>Les données collectées sont utilisées pour :</p>
                <ul>
                    <li>Répondre à vos demandes via notre formulaire de contact</li>
                    <li>Analyser et améliorer votre expérience utilisateur</li>
                </ul>


                <h2>3. Partage des données</h2>
                <p>
                    Vos données ne sont jamais vendues à des tiers. Cepandant, nous pouvons partager vos informations avec : 
                </p>
                <ul>
                    <li>Des prestataires des services tiers (ex: prestataires de paiement, services de livraison) qui nous aident à exécuter nos services.</li>
                    <li>Les autorités compétentes si cela est requis par la loi ou pour protége nos droits.</li>
                </ul>


                <h2>4. Vos droits</h2>
                <p>Conformément au RGPD et à la législation applicable, vous disposez</p>
                <ul>
                    <li><strong>Droit d&apos;accès : </strong>Voud pouvez demander une copie des données personnelles que nous détenons à votre sujet.</li>
                    <li><strong>Droit de rectification : </strong>Vous pouvez demander la correction de données inexactes ou incomplètes.</li>
                    <li><strong>Droit à l&apos;effacement: </strong>Vous pouvez demander la suppression de vos données personnelles, sauf si leur conservation est nécessaire pour des raisons légales.</li>
                    <li><strong>Droit d&apos;opposition : </strong>Vous pouvez vous opposer au traitement de vos données à des fins marketing ou pour des intérêts légitimes.</li>
                    <li><strong>Droit à la portabilité : </strong>Vous pouvez demander à recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</li>
                </ul>
                <p>
                    Pour exercer vos droits, veuillez nous contacter par email à <a href="mailto:contact@chocopei.com">contact@chocopei.com</a>
                </p>

                <h2>5. Conservation des données </h2>
                <p>
                    Vos données personnelles sont conservées uniquement le temps nécessaire pour répondre à nos obligations légales ou contractuelles, ou pour répondre à nos besoins opérationnels.
                </p>

                <h2>6. Sécurité des données </h2>
                <p>
                    Nous mettons en oeuvre des mesures de sécurité techniques et organisationelles pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation. 
                </p>

                <h2>7. Modifications de cette politique</h2>
                <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                    Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>

                <h2>8. Contact</h2>
                <p>
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à : 
                </p>

                <address>
                    <strong>Choco Péi</strong><br />
                    Adresse : [Adresse de l&apos;entreprise]<br />
                    [Code postal] [Ville]<br />
                    Téléphone : [Téléphone]<br />
                    Email : [Email]
                </address>
            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;