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
          Baba T. Engineering Training Program welcomes aspiring engineers and technical 
          professionals who are passionate about innovation and excellence. Our admission 
          process ensures candidates possess the aptitude and commitment required to thrive 
          in a rigorous, hands-on learning environment, preparing them for advanced engineering 
          challenges and industry-ready careers.
        </p>
      </div>
    </section>
  );
};

export default AdmissionsSubheader;