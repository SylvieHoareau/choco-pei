import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '@/pages/privacy-policy.module.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Politique de confidentialité</h1>
                <p>Chez Choco Péi, nous respectons votre vie privée...</p>
                
                <h2>1. Données collectées</h2>
                <p>Nous collectons les données suivantes : </p>
                <ul>
                    <li><strong>Informations que vous forunissez directement :</strong></li>
                </ul>
                
                <h2>2. Utilisation des données</h2>
                <p>Les données collectées sont utilisées pour :</p>
                <ul>
                    <li>Répondre à vos demandes via notre formulaire de contact</li>
                    <li>Analyser et améliorer votre expérience utilisateur</li>
                </ul>


                <h2>3. Partage des données</h2>
                <p></p>


                <h2>4. Vos droits</h2>
                <p>Conformément au RGPD et à la législation applicable, vous disposez</p>
                <ul>
                    <li><strong>Droit d'accès</strong></li>
                    <li><strong>Droit de rectification</strong></li>
                    <li><strong>Droit à l'effacement</strong></li>
                    <li><strong>Droit d'opposition</strong></li>
                    <li><strong>Droit à la portabilité</strong></li>
                </ul>

                <h2>5. Conservation des données </h2>
                <p></p>

                <h2>6. Sécurité des données </h2>
                <p></p>

                <h2>7. Modifications de cette politique</h2>
                <p></p>

                <h2>8. Contact</h2>
                <p></p>

                <address>
                    <strong>Choco Péi</strong><br />
                    [Adresse de l'entreprise]<br />
                    [Code postal] [Ville]<br />
                    [Téléphone]<br />
                    [Email]
                </address>
            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;