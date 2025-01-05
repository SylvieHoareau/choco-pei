import CookieConsent from "react-cookie-consent";

const CookieBanner: React.FC = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accepter"
            declineButtonText="Refuser"
            style={{ background: "#3e2723", color: "#fff" }}
            cookieName="chocopei-consent"
            expires={30}
            buttonStyle={{ background: "#ffd700", color: "#3e2723"}}
            declineButtonStyle={{ background: "#5C4033", color: "#fff"}}
            enableDeclineButton
        >
            Nous utilisons des cookies pour améliorer votre expérience et fournir des services de meilleure qualité. En continuant à utiliser notre site, vous acceptez cela.
            <a href="/privacy-policy" style={{ color: "#5C4033", textDecoration: "underline" }}>
                En savoir plus
            </a>
        </CookieConsent>
    )
};

export default CookieBanner;