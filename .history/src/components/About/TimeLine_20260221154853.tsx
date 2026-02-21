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
                src="/images/digital.jpg"
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
              <p className={styles.lead}>
                In 1970, he formally established Samtecol Nigeria Limited, expanding his engineering and 
                electro-technical services across Nigeria. During this formative period, 
                <strong>Babatunde Emmanuel Olugbemi</strong> underwent rigorous technical training and mentorship 
                under his father’s guidance, acquiring hands-on industry experience and developing 
                strong professional competence. Building upon decades of practical experience and 
                engineering heritage, <strong>Baba T Engineering Limited</strong> was established in 1991 to continue and 
                expand this tradition of excellence.
              </p>

              <p className={styles.lead}>
                In 2021, the company was fully incorporated as a Limited Liability Company, 
                strengthening its corporate structure and positioning it for sustainable growth. 
                Although the company initiated relocation plans to Abuja in 2000 as part of its 
                long-term strategic expansion, it successfully established its full operational 
                presence in the Federal Capital Territory by the end of 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}