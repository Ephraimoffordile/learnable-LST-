import type { Product } from '../types/product'; 
import styles from '../styles/ProductCard.module.css'; 

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  console.log('Rendering ProductCard:', product);
 
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <div className={styles.productCard}> 
      <img src={product.thumbnail} alt={product.title} className={styles.productImage} /> 
      
      <div className={styles.cardContent}> 
        <h3 className={styles.productCategory}>{product.category}</h3>
        <p className={styles.productDepartment}>{product.brand || 'English Department'}</p> 
        
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
          <span className={styles.discountedPrice}>${discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;