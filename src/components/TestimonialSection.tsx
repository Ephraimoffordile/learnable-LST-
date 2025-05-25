import React from "react";
import styles from "../styles/TestimonialSection.module.css";
import { testimonials, galleryImages, } from "../data/testimonials";
import type { TestimonialItem } from '../data/testimonials';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<span key={i} className={styles.starFilled}>&#9733;</span>);
        } else {
            stars.push(<span key={i} className={styles.starEmpty}>&#9734;</span>);
        }
    }
    return <div className={styles.stars}>{stars}</div>;
};

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => (
    <div className={styles.card}>
        <img src={item.avatar} alt={item.name} className={styles.avatar} /> 
        <StarRating rating={item.rating} />
        <p className={styles.message}>{item.message}</p>
        <div className={styles.userInfo}>
         
            <div>
                <h4 className={styles.name}>{item.name}</h4>
                <p className={styles.role}>{item.role}</p>
            </div>
        </div>
    </div>
);

const TestimonialSection: React.FC = () => {

     console.log("Testimonial shown:", testimonials[0]);
  console.log("Gallery images count:", galleryImages.length);

    return (
        <section className={styles.pageContainer}>
            <div className={styles.testimonialContent}>
                <h2 className={styles.sectionTitle}>What they say about us</h2>
                {testimonials.length > 0 && (
                    <TestimonialCard item={testimonials[0]} />
                )}
            </div>

            <div className={styles.imageGallery}>
                {galleryImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={styles.galleryImage}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;