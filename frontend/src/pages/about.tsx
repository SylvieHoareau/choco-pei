'use client';

import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/about.module.css";

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
                    
                    <div className={styles.container}>
                        <Image 
                            src="https://images.unsplash.com/photo-1648754414700-b58a4719a686?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Chocolat posé sur un livre noir avec des dorures"
                            className={styles.image}
                            width={300}
                            height={300}
                        />
                        <p className={styles.description}>
                            Fondée en 2015, Choco Pei est née d&apos;une passion pour le chocolat de qualité
                            et les trésors gistatifs uniques de La Réunion. Chaque produit est élaboré avec soin,
                            à partir d&apos;ingrédients locaux et durables.
                        </p>
                    </div>
                    
                </section>

                <section className={styles.team}>
                    <h2>Notre équipe</h2>
                    <div className={styles.container}>
                        <p className={styles.description}>
                            Derrière chaque chocolat se trouve une équipe de maîtres chocolatiers,
                            artistes du goût, et amoureux des traditions culinaires. Ensemble,
                            nous créons des expériences gourmandes inoubliables.
                        </p>

                        <Image 
                            src="/images/equipe.jpg" 
                            alt="Chocolatier démoulant des chocolats avec des gants"
                            className={styles.image}
                            width={300}
                            height={300}
                        />
                    </div>
                    
                </section>

                <section className={styles.values}>
                    <h2>Nos valeurs</h2>
                    <div className={styles.container}>
                        <Image 
                                src="/images/valeurs.jpg" 
                                alt="Trésor avec des pièces en or"
                                className={styles.image}
                                width={300}
                                height={300}
                            />
                        <ul>
                            <li>Respect de l&apos;environnement</li>
                            <li>Artisanat et savoir-faire</li>
                            <li>Soutien aux producteurs locaux</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;