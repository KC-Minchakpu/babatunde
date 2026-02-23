import Image from "next/image";
import styles from "./AdmissionsSection.module.css";

export default function AdmissionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.left}>

          <h2 className={styles.title}>
            Begin Your Academic Journey
          </h2>

          <p className={styles.description}>
            Discover a transformative educational & training experience where innovation
            meets tradition. Our admissions process is designed to identify
            passionate learners ready to make their mark on the world.
          </p>

          {/* STATS */}
          <div className={styles.stats}>

            <div className={styles.stat}>
              <h3>89%</h3>
              <p>Acceptance Rate</p>
            </div>

            <div className={styles.stat}>
              <h3>$28K</h3>
              <p>Average Financial Aid</p>
            </div>

            <div className={styles.stat}>
              <h3>15:1</h3>
              <p>Student-Faculty Ratio</p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className={styles.right}>

          <div className={styles.imageWrapper}>

            <Image
              src="/admission.jpg"
              alt="Students in classroom"
              fill
              className={styles.image}
            />

            <div className={styles.badge}>
              🎓 Join 12,000+ Alumni
            </div>

          </div>

        </div>


      </div>
    </section>
  );
}