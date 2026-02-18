// components/WhyChooseUs.tsx
import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

// Define the feature type
interface Feature {
  title: string;
  description: string;
  icon: string; // URL or icon class
}

// Feature data
const leftFeatures: Feature[] = [
  {
    title: "Best In Industry",
    description: "We lead the electronic engineering sector with innovative solutions and cutting-edge technology, ensuring top performance and reliability.",
    icon: "/icons/industry.svg",
  },
  {
    title: "Award Winning",
    description: "Our projects and products have received national and international recognition for excellence in design, quality, and engineering innovation.",
    icon: "/icons/award.svg",
  },
  {
    title: "Happy Clients",
    description: "We prioritize our clients’ satisfaction, delivering customized electronic solutions that exceed expectations and build lasting partnerships.",
    icon: "/icons/clients.svg",
  },
];

const rightFeatures: Feature[] = [
  {
    title: "Professional Staff",
    description: "Our team of experienced engineers and technicians brings expertise, precision, and professionalism to every project we undertake.",
    icon: "/icons/staff.svg",
  },
  {
    title: "Quality Assurance",
    description: "We implement rigorous testing and quality control procedures to ensure every product meets the highest industry standards.",
    icon: "/icons/quality.svg",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist clients with any technical issues or inquiries, ensuring seamless operations.",
    icon: "/icons/support.svg",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.grid}>
        {/* Left Features */}
        <div className={styles.features}>
          {leftFeatures.map((feature, index) => (
            <div className={styles.feature} key={index}>
              <div className={styles.iconWrapper}>
                <Image src={feature.icon} alt={feature.title} width={32} height={32} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/worker.png"
            alt="Worker"
            width={250}
            height={400}
            className={styles.centerImage}
          />
        </div>

        {/* Right Features */}
        <div className={styles.features}>
          {rightFeatures.map((feature, index) => (
            <div className={styles.feature} key={index}>
              <div className={styles.iconWrapper}>
                <Image src={feature.icon} alt={feature.title} width={32} height={32} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
