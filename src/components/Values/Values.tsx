import styles from "./Values.module.css";

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Our Values</h2>
          <p>These core principles guide everything we do at Baba T Engineering.</p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.iconGreen}`}>
              👤
            </div>
            <h3>Learner First</h3>
            <p>
              Every decision we make starts with a simple question: “How does
              this benefit our Clients?” We’re obsessed with client success.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.iconOrange}`}>
              ✨
            </div>
            <h3>Excellence Always</h3>
            <p>
              We maintain the highest standards for our services, instructors,
              and platform. Good enough is never good enough for us.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.iconTeal}`}>
              🌍
            </div>
            <h3>Accessible to All</h3>
            <p>
              We believe quality services should be available to everyone. We
              work hard to keep services affordable and accessible globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
