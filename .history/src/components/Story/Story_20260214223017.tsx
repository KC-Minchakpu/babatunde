import Image from "next/image";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={styles.story}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>Our Story</span>

          <h2 className={styles.title}>
            Empowering Learners to <br />
            <span>Build the Future</span>
          </h2>

          <p className={styles.description}>
            Baba T Engineering was founded with a simple mission: to provide world-class
            engineering services and education to anyone, anywhere, and anytime. We believe that access to quality
            learning should not be limited by geography, background, or
            circumstances.
          </p>

          <p className={styles.description}>
            Today, we&apos;re proud to serve over 100,000 Clients and learners across the globe,
            partnering with industry-leading instructors and technicians who bring real-world
            experience to every lesson and repairs.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/power-systems.jpg"
              alt="Technician working on power systems"
              fill
              className={styles.image}
              priority
            />

            <div className={styles.floatingCard}>
              <div className={styles.icon}>🎓</div>
              <div>
                <h4>Founded 2020</h4>
                <p>Kaduna, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
