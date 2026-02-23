"use client";

import Image from "next/image";
import styles from "./TrainingBanner.module.css";

const TrainingBanner = () => {
  return (
    <section className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            The right education and training program  
            <br />
            can unlock your potential.
          </h1>

          <p className={styles.subText}>
            Discover how online certificates and degrees give you the
            flexibility to build a better future.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/graduation.jpg" // <-- Replace with your image path
          alt="Graduate"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default TrainingBanner;