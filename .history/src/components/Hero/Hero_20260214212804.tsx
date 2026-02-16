import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            — EXCELLENCE IN CIRCUIT REPAIR AND MAINTENANCE
          </span>

          <h1 className={styles.title}>
            Restoring Power, <br /> Precision, and Performance
          </h1>

          <p className={styles.description}>
            At Baba T Engineering, we specialize in professional electronic hardware 
            repairs, with a focus on computer motherboards, laptops, and other 
            critical devices. We combine expert craftsmanship with cutting-edge 
            diagnostic tools to bring your electronics back to life — fast, 
            affordable, and reliable.
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
              <h3>5000+</h3>
              <p>Devices Repaired</p>
            </div>

            <div className={styles.stat}>
              <h3>3000+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/misc-16.jpeg"
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
