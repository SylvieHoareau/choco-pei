import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import styles from "@/styles/products.module.css";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <h1 className={styles.productsTitle}>Nos produits</h1>
                <div className={styles.cardContainer}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Products;