import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/contact.module.css";

const Contact: React.FC = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setStatus("success");
        } catch (error) {
            setStatus("error");
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Une erreur inconnue s'est produite.");
            }
        }
    };
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
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email : </label>
                        <input 
                            id="email" 
                            name="email"
                            type="email"
                            aria-describedby="email-help" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <small id="email-help">Votre adresse ne sera jamais partagée.</small>

                        <label htmlFor="message">Message : </label>
                        <textarea  
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
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

                        <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
                            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                        </button>

                        {status === "success" && (
                            <p aria-live="polite" className={styles.success}>Merci pour votre message !</p>
                        )}
                        {status === "error" && (
                            <p aria-live="polite" className={styles.error}>
                                Erreur : {errorMessage}
                            </p>
                        )}
                    </form>
                </div>
                
            </main>
            <Footer />
        </>
    );
}

export default Contact;