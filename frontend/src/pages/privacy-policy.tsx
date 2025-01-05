import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from '@/pages/privacy-policy.module.css';
import '@/styles/globals.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <h1>Politique de confidentialité</h1>
                <p>Chez Choco Péi, nous respectons votre vie privée...</p>
                <h2>1. Données collectées</h2>
                <p></p>
                <h2>2. Vos droits</h2>
            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;