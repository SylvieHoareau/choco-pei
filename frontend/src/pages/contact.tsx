import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/pages/contact.module.css";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<"idle" >("idle");
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            setErrorMessage(error.message);
        }
    }

    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                <h1>Contactez-nous</h1>
                <form className={styles.formContainer}>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="email" required/>

                    <label htmlFor="message">Message : </label>
                    <input type="text" id="message" name="message" required/>

                    <label htmlFor="">
                        <input type="checkbox" required/>
                        J'accepte la <Link href="/privacy-policy">Politique de confidentialité</Link>
                    </label>
                    <button type="submit" className={styles.submitButton}>Envoyer</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact;