"use client";

import React from "react";
import styles from "./AdmissionsSubheader.module.css";

const AdmissionsSubheader: React.FC = () => {
  return (
    <section className={styles.subheader}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Admissions
          <span className={styles.underline}></span>
        </h2>
        <p className={styles.description}>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
          voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus
          dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>
    </section>
  );
};

export default AdmissionsSubheader;