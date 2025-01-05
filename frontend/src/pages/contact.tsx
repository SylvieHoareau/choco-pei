import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/pages/contact.module.css";
import '@/styles/globals.css';

const Contact: React.FC = () => {
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

                    <button type="submit" className={styles.submitButton}>Envoyer</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact;