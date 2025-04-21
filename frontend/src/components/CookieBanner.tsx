import styles from '../styles/CookieBanner.module.css';

const CookieBanner: React.FC = () => {

    return (
        <div className={styles.banner} role="dialog" aria-label="Bannière cookies">
            <p>Bannière de cookies</p>
        </div>
    );
};

export default CookieBanner;