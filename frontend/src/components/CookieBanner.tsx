import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Cookie from "js-cookie";
import Link from "next/link";
import styles from '../styles/CookieBanner.module.css';

const CookieBanner: React.FC = () => {

    const enableGA = () => {
        if (typeof window === "undefined") return;

        // Injecter le script de GA
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // remplace avec ton ID
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
        `;
        document.head.appendChild(script2);
    };

    // Si le consentement a déjà été donné, on active GA
    useEffect(() => {
        const consent = Cookie.get("chocopei-consent");
        if (consent === "true") {
            enableGA();
        }
    }, []); 

    return (
        <CookieConsent
            role="dialog"
            ariaLabel="Bannière de consentement aux cookies"
            location="bottom"
            buttonText="Accepter"
            declineButtonText="Refuser"
            cookieName="chocopei-consent"
            expires={30}
            enableDeclineButton
            onAccept={() => {
                console.log("Consentement accepté");
                enableGA();
            }}
            onDecline={() => {
                console.log("Consentement refusé");
                // Supprimer tous les cookies non essentiels
            }}
            containerClasses={styles.cookieBanner}
            declineButtonClasses={styles.cookieDecline}
        >
            Nous utilisons des cookies pour améliorer votre expérience et fournir des services de meilleure qualité. En continuant à utiliser notre site, vous acceptez cela.
            <Link to="/privacy-policy" className={styles.cookieLink}>
                En savoir plus
            </Link>
        </CookieConsent>
    )
};

export default CookieBanner;