import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";

const Contact: React.FC = () => {

    const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "";
    const [state, handleSubmit] = useForm(formKey);

    if (!process.env.NEXT_PUBLIC_FORMSPREE_KEY) {
        console.error("La clé Formspree manque. Vérifiez vos variables d&apos;environnement.");
        return (
            <div className={styles.successMessage}>
                <Navbar />
                <main className={styles.mainContainer}>
                    <p>Formulaire indisponible pour le moment.</p>
                </main>
                <Footer />
            </div>
        );
    }
    
    if (state.succeeded) {
        return (
            <div className={styles.successMessage}>
                <Navbar />
                <main className={styles.mainContainer}>
                    <h1>Merci pour votre message !</h1>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                </main>
                <Footer />
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                <div className={styles.divContainer}>
                    <h1>Contactez-nous</h1>
                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                        <label htmlFor="name">Nom : </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required
                        />

                        <label htmlFor="email">Email : </label>
                        <input 
                            id="email" 
                            name="email"
                            type="email"
                            aria-describedby="email-help" 
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                         />
                        <small id="email-help">Votre adresse ne sera jamais partagée.</small>

                        <label htmlFor="message">Message : </label>
                        <textarea  
                            id="message" 
                            name="message"
                            required
                        />

                        <input 
                            type="checkbox" 
                            id="privacy"
                            name="privacy"
                            required
                        />
                        <label htmlFor="privacy">
                            J&apos;accepte la <Link href="/privacy-policy">Politique de confidentialité</Link>
                        </label>

                        <button type="submit" className={styles.submitButton} disabled={state.submitting}>
                            Envoyer
                        </button>

                        {state.errors && Object.keys(state.errors).length > 0 && (
                            <p className={styles.errorMessage}>Une erreur est survenue. Veuillez réessayer.</p>
                        )}

                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contact;