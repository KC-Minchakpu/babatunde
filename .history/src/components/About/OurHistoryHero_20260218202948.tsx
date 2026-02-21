import styles from './OurHistoryHero.module.css';

export default function OurHistoryHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Our Story</span>

        <h1 className={styles.heading}>
          Democratizing education <br />
          for <span>everyone</span>
        </h1>

        <p className={styles.description}>
          We believe that education should be accessible to everyone,
          everywhere. That's why we've built a platform that connects
          learners with world-class instructors.
        </p>
      </div>
    </section>
  );
}
