// components/AboutSection.tsx
import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <span className={styles.ourStory}>Our Story</span>
        <h1 className={styles.heading}>
          Democratizing Engineering for <span className={styles.highlight}>everyone</span>
        </h1>
        <p className={styles.description}>
          We believe that our services should be accessible to everyone, everywhere. That&apos;s why
          we&apos;ve built a platform that connects clients with world-class technicians.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
