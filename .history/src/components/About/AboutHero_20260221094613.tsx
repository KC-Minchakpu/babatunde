// components/AboutHero.tsx
import Image from "next/image";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
          {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.kicker}>ABOUT OUR FIRM</span>

        <h1 className={styles.heading}>
          Engineering Excellence <br /> Since 2008
        </h1>

        <p className={styles.description}>
          For over a decade, Baba T. Engineering has been delivering
          innovative, reliable, and precision-driven engineering solutions
          built on integrity, performance, and measurable results.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;