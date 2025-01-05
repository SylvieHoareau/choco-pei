import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import styles from "@/pages/products.module.css";
import '@/styles/globals.css';

const products: Product[] = [
    {
        id: 1,
        name: "Truffes au chocolat et au coco",
        price: "12€",
        image: "https://images.unsplash.com/photo-1598276223578-f16e0efa9920?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "De délicieuses truffes au chocolat noir."
    },
    {
        id: 2,
        name: "Tablettes artisanales",
        price: "8€",
        image: "https://img.freepik.com/photos-gratuite/vue-dessus-chocolat-blanc-rouge-dans-tache-blanche-support-blanc_140725-14066.jpg?t=st=1736057457~exp=1736061057~hmac=f0ca90a714548680be4a9465ae016eafae4677b000503023d8240c10e27975fc&w=740",
        description: "Des tablettes de chocolat aux saveurs tropicales."
    },
    {
        id: 3,
        name: "Coffrets cadeaux",
        price: "25€",
        image: "https://img.freepik.com/photos-gratuite/vue-laterale-bonbons-au-chocolat-decores-dans-boite-or-noir_140725-13998.jpg?t=st=1736057485~exp=1736061085~hmac=f371477f8796f6d997f3acc8f433273903689c90ea646e8e875943124668de06&w=740",
        description: "Un coffret parfait pour les amateurs de chocolat."
    },
]

const Products: React.FC = () => {
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