'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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