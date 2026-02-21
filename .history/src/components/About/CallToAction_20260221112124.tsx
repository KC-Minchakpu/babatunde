import Image from "next/image";
import styles from "./CallToAction.module.css";
import Link from "next/link";

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
            <Link href="/visit-office" className={styles.item}>
            <h3>
                Visit our Office
                <span className={styles.arrow}>→</span>
            </h3>
            <p>
                Baba T is a Technical/Engineering Company located
                in the heart of Abuja, that specializes in electronic repairs.
                From smartphones to laptops, we have the expertise to fix a wide range of devices.
            </p>

            </Link>
            <Link href="/request-information" className={styles.item}>
            <h3>
                Request Information
                <span className={styles.arrow}>→</span>
            </h3>
            <p>
                Learn more about specific training programs,
                cost of training, financial implications for repairs and more.
            </p>
            </Link>
            <Link href="/apply" className={styles.item}>
            <h3>
                Apply Today
                <span className={styles.arrow}>→</span>
            </h3>
            <p>
                Get started on your training and develop meaningful
                skills that will last a lifetime
            </p>
            </Link>


        </div>
      </div>
    </section>
  );
}