import Image from "next/image";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>

        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/repairs.jpg"
            alt="Repairing a Laptop"
            fill
            className={styles.image}
            priority
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className={styles.content}>

          <div className={styles.item}>
            <h3>
              Visit our Campus
              <span className={styles.arrow}>→</span>
            </h3>

            <p>
              Baba T is a Technical/Engineering Company located
              in the heart of Abuja, that specializes in electronic repairs. From smartphones 
              to laptops, we have the expertise to fix a wide range of devices.
            </p>
          </div>


          <div className={styles.item}>
            <h3>
              Request Information
              <span className={styles.arrow}>→</span>
            </h3>

            <p>
              Learn more about specific academic programs, transferring credits,
              cost of tuition, financial aid options and more.
            </p>
          </div>


          <div className={styles.item}>
            <h3>
              Apply Today
              <span className={styles.arrow}>→</span>
            </h3>

            <p>
              Get started on your college journey and develop meaningful
              Christian friendships that will last a lifetime
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}