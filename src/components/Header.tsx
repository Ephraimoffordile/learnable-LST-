import React from 'react';
import styles from '../styles/Header.module.css'; 
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaUser, FaSearch, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io"; 

const Header: React.FC = () => {
console.log("Header loaded — checking login status...");

  return (
    <header className={styles.header}>
      
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <a href="tel:(225) 555-0118" className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>(225) 555-0118</span>
          </a>
          <a href="mailto:michelle.rivera@example.com" className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>

        <div className={styles.topBarCenter}>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

        <div className={styles.topBarRight}>
          <span>Follow Us :</span>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

    
      <nav className={styles.mainNav}>
        <div className={styles.logo}>
          Bandage
        </div>

        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li className={styles.dropdown}>
            <a href="/shop">Shop <IoIosArrowDown /></a>
            
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/pages">Pages</a></li>
        </ul>

        <div className={styles.navActions}>
          <a href="/login" className={styles.loginRegister}>
            <FaUser className={styles.icon} />
            <span>Login / Register</span>
          </a>
          <a href="/search" className={styles.actionIcon}>
            <FaSearch className={styles.icon} />
          </a>
          <a href="/cart" className={styles.actionIcon}>
            <FaShoppingCart className={styles.icon} />
            <span className={styles.badge}>1</span> 
          </a>
          <a href="/wishlist" className={styles.actionIcon}>
            <FaRegHeart className={styles.icon} />
            <span className={styles.badge}>1</span> 
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;