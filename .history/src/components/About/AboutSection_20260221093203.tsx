// components/AboutSection.tsx
import Image from "next/image";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.kicker}>ABOUT BABA T. ENGINEERING</span>

          <h2 className={styles.heading}>
            Engineering Excellence Built on Precision & Integrity
          </h2>

          <div className={styles.divider}></div>

          <p>
            Founded with a commitment to technical accuracy and professional
            integrity, Baba T. Engineering delivers innovative engineering
            solutions tailored to modern infrastructure and industrial needs.
            What began as a focused engineering practice has grown into a
            trusted technical partner for clients across multiple sectors.
          </p>

          <p>
            Our approach is rooted in precision design, rigorous analysis,
            and uncompromising quality standards. We collaborate closely with
            clients to develop solutions that are efficient, sustainable,
            and structurally sound.
          </p>

          <p>
            Today, our multidisciplinary team continues to push engineering
            boundaries—leveraging advanced tools, modern methodologies,
            and practical field expertise to deliver measurable results.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/circuit.jpg"
            alt="Engineering project planning"
            fill
            className={styles.image}
            priority
          />

          <div className={styles.badge}>
            <span className={styles.badgeNumber}>15+</span>
            <span className={styles.badgeText}>Years of Engineering Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;