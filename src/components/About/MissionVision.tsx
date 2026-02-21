// components/MissionVision.tsx
import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Mission Card */}
        <div className={styles.card}>
          <span className={styles.kicker}>OUR MISSION</span>
          <h3 className={styles.text}>
            To deliver innovative, reliable, and precision-driven engineering
            solutions that power infrastructure and industrial growth.
          </h3>
        </div>

        {/* Vision Card */}
        <div className={styles.card}>
          <span className={styles.kicker}>OUR VISION</span>
          <h3 className={styles.text}>
            To be a leading engineering partner recognized for excellence,
            technical integrity, and transformative impact across industries.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;