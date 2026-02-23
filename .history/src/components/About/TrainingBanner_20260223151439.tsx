"use client";

import Image from "next/image";
import styles from "./TrainingBanner.module.css";
import Link from "next/link";

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
            Our training programs combine technical expertise, hands-on practical experience, and 
            industry-driven knowledge to equip aspiring engineers with the skills required to excel 
            in today’s dynamic engineering environment. At Baba T Engineering, we bridge the gap between 
            theory and real-world application to build competent, confident, and industry-ready 
            professionals.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/register" className={styles.primaryBtn}>Get Started</Link>
            <Link href="/trainings" className={styles.secondaryBtn}>Learn More</Link>
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