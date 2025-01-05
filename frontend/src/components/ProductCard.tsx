import { Product } from '../types/product';
import styles from '@/components/ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
        </div>
    )
}

export default ProductCard;