import React from 'react';
import styles from '../styles/PromoBanner.module.css';

const PromoBanner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
       
        <p className={styles.subheading}>Designing Better Experience</p>
        
        <h2 className={styles.heading}>Problems trying to resolve<br />the conflict between</h2>
        
       
        <p className={styles.description}>
          Problems trying to resolve the conflict between the two major<br />
          realms of Classical physics.
        </p>
        
        <div className={styles.price}>$16.48</div>
        <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
      </div>
    </section>
  );
};

export default PromoBanner;