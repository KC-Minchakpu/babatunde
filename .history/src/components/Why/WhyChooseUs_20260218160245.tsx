import React from "react";
import styles from "./WhyUs.module.css";
import { FaPalette, FaChartLine, FaUsers, FaCogs, FaShieldAlt, FaHeadset } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Creative Excellence",
    description:
      "We deliver innovative electronic engineering solutions with precision design and modern technology integration.",
    icon: <FaPalette />,
  },
  {
    title: "Proven Results",
    description:
      "Our projects consistently meet performance standards, ensuring reliable and measurable engineering success.",
    icon: <FaChartLine />,
  },
  {
    title: "Expert Team",
    description:
      "Our certified engineers and technicians bring years of hands-on industry experience to every project.",
    icon: <FaUsers />,
  },
  {
    title: "Advanced Technology",
    description:
      "We utilize cutting-edge tools and systems to develop efficient and future-ready electronic solutions.",
    icon: <FaCogs />,
  },
  {
    title: "Quality Assurance",
    description:
      "Every product undergoes strict testing and inspection to meet international quality standards.",
    icon: <FaShieldAlt />,
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to ensure uninterrupted operations and client satisfaction.",
    icon: <FaHeadset />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Us</h2>
        <p className={styles.subtitle}>
          We provide innovative, reliable, and high-quality electronic engineering solutions tailored to your needs.
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
