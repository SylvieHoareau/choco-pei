import "../styles/globals.css";
import type { AppProps } from "next/app";

// Ce fichier est l'entry point principal pour toutes les pages
// Il reçoit le composant de la page actuelle (Component) et ses props (pageProps)
export default function App({ Component, pageProps }: AppProps) {
    
    // Ici, il rend le composant de la page actuelle
    return <Component {...pageProps} />;
} 