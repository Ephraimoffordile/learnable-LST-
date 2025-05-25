import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
   console.log("Hero section rendered");
   
  return (
    <section className={styles.hero}>

     
      <div className={styles.leftBanner}>
        <img src="/hero-main.jpg" alt="Main Furniture Banner" className={styles.bannerImage} /> 
        
        <div className={styles.textOverlay}>
          <p className={styles.itemCount}>5 items</p>
          <h1 className={styles.mainTitle}>FURNITURE</h1>
          <a href="#" className={styles.readMore}>Read More</a> 
        </div>
      </div>

      
      <div className={styles.rightGrid}>

        <div className={`${styles.gridItem} ${styles.topRightLargeItem}`}>
          <img src="/hero4.jpg" alt="Succulent Plant" className={styles.gridImage} /> 
          
          <div className={styles.gridTextOverlay}>
            <p className={styles.itemCount}>5 items</p>
            <h2 className={styles.gridTitle}>FURNITURE</h2>
            <a href="#" className={styles.readMore}>Read More</a> 
          </div>
        </div>

      
        <div className={styles.bottomRightSmallItems}>

        
          <div className={styles.gridItem}>
            <img src="/hero5.jpg" alt="Pendant Light" className={styles.gridImage} /> 
            
            <div className={styles.gridTextOverlay}>
              <p className={styles.itemCount}>5 items</p>
              <h2 className={styles.gridTitle}>FURNITURE</h2>
              <a href="#" className={styles.readMore}>Read More</a> 
            </div>
          </div>

         
          <div className={styles.gridItem}>
            <img src="/hero6.jpg" alt="Vases" className={styles.gridImage} /> 
            
            <div className={styles.gridTextOverlay}>
              <p className={styles.itemCount}>5 items</p>
              <h2 className={styles.gridTitle}>FURNITURE</h2>
              <a href="#" className={styles.readMore}>Read More</a> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;