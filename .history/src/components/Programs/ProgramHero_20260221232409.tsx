import Image from 'next/image'
import styles from "./ProgramHero.module.css";
import { FaStar } from "react-icons/fa";

export default function ProgramHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <h1 className={styles.title}>
          Advance your engineering <br />
          skills with our courses
        </h1>

        <p className={styles.subtitle}>
          Build skills with our courses and mentor from world-class companies.
        </p>

        {/* Rating Card */}
        <div className={styles.ratingCard}>
          
          <div className={styles.avatars}>
      <Image src="/images/kevin.jpg" alt="student" width={80} height={80} />
      <Image src="/avatar2.jpg" alt="student" width={80} height={80} />
      <Image src="/avatar3.jpg" alt="student" width={80} height={80} />
      <Image src="/avatar4.jpg" alt="student" width={80} height={80} />
      <Image src="/avatar5.jpg" alt="student" width={80} height={80} />
    </div>

          <div className={styles.ratingText}>
            <div className={styles.score}>
              4.6
              <span className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <p>Rated by 25k on Google.</p>
          </div>

        </div>

      </div>
    </section>
  );
}