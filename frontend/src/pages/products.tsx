'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { GetServerSideProps } from 'next';
import { Product } from "../types/product";
import styles from "../styles/products.module.css";

// Typage des props
interface ProductsPageProps {
    products: Product[];
}

const Products: React.FC<ProductsPageProps> = ({ products }) => {
   
    return (
        <>
            <Navbar />
            <main>
                <h1 className={styles.productsTitle}>Nos produits</h1>
                <div className={styles.cardContainer}>
                    {products?.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                        ) :(
                            <p>Aucun produit disponible</p>
                        )
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const mock = context.query.mock;

    let products: Product[] = [];

    if (mock === 'empty') {
        // Cas sépcial pour les tests -> aucun produit
        products = [];
    } else {
        // Appel à l'API pour récupérer les produits
        const res = await fetch('http://localhost:3000/api/products');
        products = await res.json();
    }
    
    return {
        props: {
            products
        }
    }
}

export default Products;