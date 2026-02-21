import React from "react";
import styles from "./PageBanner.module.css";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  backgroundVariant: "about" | "contact" | "services" | "student-life" | "team" | "blog" | "default";
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  backgroundVariant,
}) => {
  return (
    <section
      className={`${styles.banner} ${styles[backgroundVariant]}`}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <span className={styles.separator}>→</span>
          <span className={styles.current}>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;