import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            — EXCELLENCE IN CONSTRUCTION
          </span>

          <h1 className={styles.title}>
            Restoring Power, <br /> Precision, and Performance
          </h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat at
            orci maximus feugiat.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Request a Quote</button>
            <button className={styles.secondaryBtn}>Our Projects</button>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>

            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className={styles.stat}>
              <h3>300+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/construction-worker.jpg"
              alt="Construction worker"
              fill
              className={styles.image}
              priority
            />

            <div className={styles.overlayCard}>
              <h4>ISO 9001:2015</h4>
              <p>Certified Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
