import { Product } from '../types/product';
import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <article 
            className={styles.card}
            tabIndex={0}
            aria-label={`Produit : ${product.name}`}
        >
            {product.image ? (
                <img 
                    src= {product.image}
                    alt={product.name} 
                    className={styles.image}
                    width={300}
                    height={300}
                    loading="lazy"
                />
            ) : (
                <div className={styles.imagePlaceholder}>Image indisponible</div>
            )}
           
            
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price} aria-label={`Prix: ${product.price}`}>
                {product.price}
            </p>
        </article>
    )
}

export default ProductCard;