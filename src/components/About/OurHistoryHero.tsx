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
          We believe that your devices should give you the value for your money. That&apos;s why we&apos;ve built a platform that connects
          clients with world-class technicians.
        </p>
      </div>
    </section>
  );
}
