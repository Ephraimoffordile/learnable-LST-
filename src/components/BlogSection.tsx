import React from "react";
import styles from "../styles/BlogSection.module.css";
import { blogPosts } from "../data/blogs"; 
import { FaRegClock, FaRegCommentAlt } from 'react-icons/fa'; 

const BlogSection: React.FC = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>Practice Advice</p>
        <h2 className={styles.heading}>Featured Posts</h2>
      </div>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <div className={styles.card} key={post.id}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.title} className={styles.image} />
              <span className={styles.newTag}>NEW</span> 
            </div>
            <div className={styles.content}>
              <div className={styles.tags}>
                <span>{post.category}</span>
                <span>{post.tag}</span>
                <span>{post.status}</span>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.date}>
                  <FaRegClock className={styles.metaIcon} />
                  {post.date}
                </span>
                <span className={styles.comments}>
                  <FaRegCommentAlt className={styles.metaIcon} />
                  {post.comments}
                </span>
              </div>
              <a href="#" className={styles.learnMore}>
                Learn More <span className={styles.arrow}>&gt;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;