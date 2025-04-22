import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { GetStaticProps } from 'next';
import { Product } from "../types/product";
import { products } from "../data/products";
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

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            products
        }
    }
}

export default Products;