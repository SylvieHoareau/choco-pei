import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {

    const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "";

    if (!formKey) {
        return (
            <>
                <Navbar />
                <main className={styles.mainContainer}>
                    <p>Formulaire indisponible pour le moment.</p>
                </main>
                <Footer />
            </>
        );
    }
    
    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                <h1>Contactez-nous</h1>
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default Contact;