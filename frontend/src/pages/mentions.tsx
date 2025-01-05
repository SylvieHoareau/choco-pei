import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '@/pages/privacy-policy.module.css';

const Mentions: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Mentions Légales</h1>
                
                <h2>Editeur du site</h2>
                <p>
                    Le site www.chocopei.com est édité par <strong>Choco Péi</strong>,
                    société à responsabilité limitée (SARL) au capital de [X] euros,
                    immatriculée au registre du commerce et des société sous le numéro SIRET
                </p>
                <p>
                    Siège social: [Adresse de l'entreprise]
                </p>
                <p>
                    Responsable de publication : [Nom du responsable]
                </p>
                <p>
                    Email: [email@example.com] | Téléphone: [numéro de téléphone]
                </p>

                <h2>Hébergeur</h2>
                <p>
                    Le site est hébergé par [Nom de l'hébergeur],
                    situé à [adresse de l'hébergeur], téléphone: [numéro de téléphone]
                </p>

                <h2>Propriété intellectuelle</h2>
                <p>
                    Tous les contenus présents sur ce site, y compris les textes, images
                </p>

                <h2>Protection des données personnelles</h2>
                <p>
                    Conformément à la rgélementation sur la protection des données personnelles, nous collectons et traitons les informations nécessaires à l'utilisation de notre site, telles que les informations de contact 
                </p>
                <p>
                    Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant, que vous pouvez exercer en nous contactant par email à  [email@example.com].
                </p>
                <p>
                    Nous utilisons également des cookies pour améliorer votre expérience utilisateur. Pour plus d'informations, consultez notre politique de confidentialité. 
                </p>

                <h2>Limitation de responsabilité</h2>
                <p>
                    L'éditeur du site ne saurait être tenu responsable des erreurs ou des interruptions de service. Le contenu de ce site est donné à titre informatif et peut être modifié sans préavis.
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Mentions;