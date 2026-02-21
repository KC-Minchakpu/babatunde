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
                Baba T Engineering Limited was founded in 1991 by its Chief Executive Officer, 
                Babatunde Emmanuel Olugbemi, in Kaduna, Nigeria. The company was established 
                on a solid foundation of technical expertise, entrepreneurial vision, and a 
                longstanding family tradition in engineering excellence.
              </p>

              <p className={styles.lead}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}