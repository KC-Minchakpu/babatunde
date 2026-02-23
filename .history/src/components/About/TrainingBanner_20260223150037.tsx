"use client";

import Image from "next/image";
import styles from "./TrainingBanner.module.css";

const TrainingBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Building Future Engineers
            <br />
            Through Practical Training
          </h1>

          <p className={styles.description}>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit!
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageCard}>
            <Image
              src="/images/integrated-circuit.jpg" 
              alt="Training"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBanner;