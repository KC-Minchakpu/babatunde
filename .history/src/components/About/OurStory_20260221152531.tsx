// components/OurStory.tsx
import Image from "next/image";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          
          {/* Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/motherboard.jpg"
                alt="Our Story"
                width={500}
                height={500}
                className={styles.image}
              />
            </div>
          </div>

          {/* Text */}
          <div className={styles.textCol}>
            <div className={styles.textWrapper}>
              <span className={styles.subtitle}>Our Story</span>

              <h2 className={styles.title}>How We Started</h2>

              <p className={styles.lead}>
                <strong>Baba T Engineering Limited</strong> was founded in 1991 by its Chief Executive Officer, 
                Babatunde Emmanuel Olugbemi, in Kaduna, Nigeria. The company was established 
                on a solid foundation of technical expertise, entrepreneurial vision, and a 
                longstanding family tradition in engineering excellence.
              </p>

              <p className={styles.lead}>
                The roots of this legacy trace back to Samtec Electro Technical Limited, founded 
                by Elder Deacon Engineer Samuel Olorunloshe Olugbemi, a highly respected engineer 
                and father of the CEO. Following his resignation from the United Africa Company (UAC), 
                where he served under Pan Electric, Engineer Samuel Olugbemi transitioned into private 
                enterprise, bringing with him extensive industry knowledge and professional experience.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}