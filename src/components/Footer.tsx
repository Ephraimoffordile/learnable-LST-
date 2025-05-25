import React from 'react';
import styles from '../styles/Footer.module.css'; 
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
     
      <div className={styles.topSection}>
        <div className={styles.logo}>Bandage</div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>

      <hr className={styles.separator} />

      
      <div className={styles.columnsSection}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Company Info</h4>
          <ul className={styles.linkList}>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#carrier">Carrier</a></li>
            <li><a href="#we-are-hiring">We are hiring</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <ul className={styles.linkList}>
            <li><a href="#about-us-legal">About Us</a></li> 
            <li><a href="#carrier-legal">Carrier</a></li> 
            <li><a href="#we-are-hiring-legal">We are hiring</a></li> 
            <li><a href="#blog-legal">Blog</a></li> 
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Features</h4>
          <ul className={styles.linkList}>
            <li><a href="#business-marketing">Business Marketing</a></li>
            <li><a href="#user-analytic">User Analytic</a></li>
            <li><a href="#live-chat">Live Chat</a></li>
            <li><a href="#unlimited-support">Unlimited Support</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <ul className={styles.linkList}>
            <li><a href="#ios-android">iOS & Android</a></li>
            <li><a href="#watch-a-demo">Watch a Demo</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#api">API</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Get In Touch</h4>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Your Email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.subscribeHint}>Lore imp sum dolor Amit.</p>
        </div>
      </div>

    
      <div className={styles.bottomSection}>
        <p className={styles.copyright}>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;