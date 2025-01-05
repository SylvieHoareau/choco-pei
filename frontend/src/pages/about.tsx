import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/pages/about.module.css";

const About: React.FC = () => {
    return (
        <>
        <Navbar />
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1>A propos de nous</h1>
                <p>
                    Bienvenue chez <strong>Choco Pei</strong>, une chocolaterie artisanale où chaque bouchée
                    est un voyage au coeur du cacao et des saveurs exotiques
                </p>
            </section>
            
            <section className={styles.history}>
                <h2>Notre histoire</h2>
                <p>
                    Fondée en 2015, Choco Pei est née d'une passion pour le chocolat de qualité
                    et les trésors gistatifs uniques de La Réunion. Chaque produit est élaboré avec soin,
                    à partir d'ingrédients locaux et durables.
                </p>
            </section>

            <section className={styles.team}>
                <h2>Notre équipe</h2>
                <p>
                    Derrière chaque chocolat se trouve une équipe de maîtres chocolatiers,
                    artistes du goût, et amoureux des traditions culinaires. Ensemble,
                    nous créons des expériences gourmandes inoubliables.
                </p>
            </section>

            <section className={styles.values}>
                <h2>Nos valeurs</h2>
                <ul>
                    <li>Respect de l'environnement</li>
                    <li>Artisanat et savoir-faire</li>
                    <li>Soutien aux producteurs locaux</li>
                </ul>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default About;