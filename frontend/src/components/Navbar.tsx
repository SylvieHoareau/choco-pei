'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
        }
    };

    return (
        <nav 
            className={styles.nav} 
            aria-label="Navigation principale"
        >
            {/* Marque */}
            <div className={styles.logo}>
                <Link href="/" className={styles.title}>
                    <h1>Choco Péi</h1>
                </Link>
            </div>

            {/* Menu hamburger */}  
            <div 
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
                onClick={toggleMenu} 
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Liens de navigation */}
            <ul 
                className={`${styles.navList} ${isMenuOpen ? styles.show : styles.hide}`} 
                aria-hidden={!isMenuOpen} 
                role="navigation"
            >
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                        Accueil
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" className={styles.navLink}>
                        A propos
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/products" className={styles.navLink}>
                        Produits
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;