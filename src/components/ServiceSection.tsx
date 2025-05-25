import React from "react";
import styles from "../styles/ServiceSection.module.css"; 

const services = [
  {
    id: "easy-wins", 
    icon: "/icon-book.png", 
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    id: "concrete", 
    icon: "/icon-concrete.png", 
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    id: "hack-growth", 
    icon: "/concrete image.png", 
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

const ServiceSection: React.FC = () => {
   console.log("Services loaded:", services);
  return (
    <section className={styles.serviceSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>Featured Products</p>
        <h2 className={styles.heading}>THE BEST SERVICES</h2>
        <p className={styles.description}>
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.icon} alt={service.title} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;