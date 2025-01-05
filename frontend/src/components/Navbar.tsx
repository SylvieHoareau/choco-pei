import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">A propos</Link></li>
                <li><Link href="/products">Produits</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;