import Link from 'next/link';
import styles from '@/components/Navbar.module.css';

const Navbar: React.FC = () => {
    
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/" className={styles.navLink}>Accueil</Link></li>
                <li className={styles.navItem}><Link href="/about" className={styles.navLink}>A propos</Link></li>
                <li className={styles.navItem}><Link href="/products" className={styles.navLink}>Produits</Link></li>
                <li className={styles.navItem}><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;