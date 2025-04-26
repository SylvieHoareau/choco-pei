'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {

    return (
        <>
            <Navbar />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;