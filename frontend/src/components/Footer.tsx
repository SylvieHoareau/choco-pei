import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Choco Péi. Tous droits réservés.</p>
                <ul className={styles.links}>
                    <li><Link href="/mentions">Mentions légales</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <p className={styles.madeBy}>
                    Site créé avec amour par <a href="http://github.com">Choco Péi</a>
                </p>
            </div>
        </footer>
    )
};

export default Footer;