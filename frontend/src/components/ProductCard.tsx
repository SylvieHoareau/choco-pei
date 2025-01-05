import { Product } from '../types/product';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card border-orange-200 rounded-md">
            <img src={product.image} alt={product.name} className="w-8 h-12"/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard;