import { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Navbar.module.css';
import '../styles/globals.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={styles.nav}>
            <div>
                <h1>Choco Péi</h1>
            </div>

            {/* Icône du hamburger, visible sur mobile */}
            <div 
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
                onClick={toggleMenu} 
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        toggleMenu();
                    }
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Liste de navigation, cachée ou non en fonction du menu */}
            <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
                <li className={styles.navItem}><Link href="/" className={styles.navLink}>Accueil</Link></li>
                <li className={styles.navItem}><Link href="/about" className={styles.navLink}>A propos</Link></li>
                <li className={styles.navItem}><Link href="/products" className={styles.navLink}>Produits</Link></li>
                <li className={styles.navItem}><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;