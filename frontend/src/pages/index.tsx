'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from '../styles/index.module.css';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            {/* Contenu principal de la page d'accueil */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Découvrez nos chocolats d&apos;exception</h1>
                    <p>Un voyage gustatif au coeur du cacao et des saveurs tropicales.</p>
                    <Link href="/products" className={styles.ctaButton}>
                        Explorez nos produits
                    </Link>
                </div>
            </header>
            <section className={styles.testimonials}>
                <h2>Avis Clients</h2>
                <div className={styles.testimonialGrid}>
                    <div className={styles.testimonial}>
                        <p>Les truffes exotiques sont un véritable délice. Un mélange parfait de saveurs !</p>
                        <span>- Marie D.</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>Le coffret précieux a été un cadeau parfait. Tout le monde a adoré !</p>
                        <span>- Julien L.</span>
                    </div>
                </div>
            </section>
            <section className={styles.cta}>
                <h2>Prêt pour une dégustation</h2>
                <Link href="/contact" className={styles.ctaButton}>
                    Contactez-nous
                </Link>
            </section>
            <Footer />
        </>
    )
}

export default Home;