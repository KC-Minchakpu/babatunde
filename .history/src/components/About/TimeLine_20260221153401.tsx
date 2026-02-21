// components/OurStory.tsx
import Image from "next/image";
import styles from "./TimeLine.module.css";

export default function TimeLine() {
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
             <h2 className={styles.title}>How We Started</h2>
              <p className={styles.lead}>
                In 1970, he formally established Samtecol Nigeria Limited, expanding his engineering and 
                electro-technical services across Nigeria. During this formative period, 
                Babatunde Emmanuel Olugbemi underwent rigorous technical training and mentorship 
                under his father’s guidance, acquiring hands-on industry experience and developing 
                strong professional competence. Building upon decades of practical experience and 
                engineering heritage, Baba T Engineering was established in 1991 to continue and 
                expand this tradition of excellence.
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