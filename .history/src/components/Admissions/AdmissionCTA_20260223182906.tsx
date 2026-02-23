import styles from "./AdmissionCTA.module.css";
import { Check } from "lucide-react";
import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        
        {/* Icon */}
        <div className={styles.iconWrapper}>
          <Check size={28} strokeWidth={3} />
        </div>

        {/* Title */}
        <h2 className={styles.title}>
          Ready to Schedule Your Appointment?
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Take the next step toward your admission today. Our team is ready to guide
          you through the process and answer all your questions.
        </p>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <Link href="/admission/book" className={styles.primaryBtn}>
            Book Now
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}