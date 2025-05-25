import React from 'react';
import { useGetProductsQuery } from '../features/products/productAPI';
import ProductCard from './ProductCard';
import styles from "../styles/Bestseller.module.css";

const BestsellerProducts: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <section className={styles.bestsellers}>
      <h2>Featured Products</h2>
      <p className={styles.subtitle}>Bestseller Products</p>
      <div className={styles["product-grid"]}>
        {products?.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.center}>
        <button className={styles["view-all-btn"]}>View All Products</button>
      </div>
    </section>
  );
};

export default BestsellerProducts;
