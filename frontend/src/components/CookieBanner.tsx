import { useEffect, useState } from "react";
import styles from '../styles/CookieBanner.module.css';

const CookieBanner: React.FC = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("chocopei-consent");
        if (!consent) {
        setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("chocopei-consent", "accepted");
        setVisible(false);
        console.log("Consentement accepté");
        // Tu peux ici initialiser Google Analytics ou tout autre outil
    };

    const handleDecline = () => {
        localStorage.setItem("chocopei-consent", "declined");
        setVisible(false);
        console.log("Consentement refusé");
        // Tu peux ici bloquer les scripts de tracking
    };

    if (!visible) return null;

    return (
        <div className={styles.banner}>
            <p className={styles.text}>
                Nous utilisons des cookies pour améliorer votre expérience. En
                continuant, vous acceptez notre politique de confidentialité.
            </p>
            <div className={styles.buttons}>
                <button className={styles.accept} onClick={handleAccept}>Accepter</button>
                <button className={styles.decline} onClick={handleDecline}>Refuser</button>
            </div>
        </div>
    );
};

export default CookieBanner;