import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
    return (
        <>
            <Navbar />
            <main shadow-lg rounded-md>
                <h1>Contactez-nous</h1>
                <form shadow-lg>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="email" required/>

                    <label htmlFor="message">Message : </label>
                    <input type="text" id="message" name="message" required/>

                    <button type="submit">Envoyer</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact;