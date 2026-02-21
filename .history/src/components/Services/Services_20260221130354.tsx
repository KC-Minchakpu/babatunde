"use client";

import styles from "./Services.module.css";
import {
  Smartphone,
  Monitor,
  BatteryCharging,
  Cpu,
  CircuitBoard,
  Tablet,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Smartphone Board Repair",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
    icon: Smartphone,
  },
  {
    title: "Computer Diagnostics",
    description:
      "Using advanced diagnostic tools, we identify hardware and software issues affecting system performance. From startup failures to overheating, we provide accurate assessments and effective solutions.",
    icon: Monitor,
  },
  {
    title: "Power Supply Fixes",
    description:
      "We repair and replace damaged power supply units, charging ports, and internal circuits to ensure stable power flow and device safety. Our precision work prevents further damage and enhances reliability.",
    icon: BatteryCharging,
  },
  {
    title: "Motherboard Repairs",
    description:
      "We specialize in diagnosing and repairing faulty motherboards for laptops and desktops. Our expert technicians handle complex component-level repairs to restore full functionality and extend your device’s lifespan.",
    icon: Cpu,
  },
  {
    title: "Circuit Board Fixes",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    icon: CircuitBoard,
  },
  {
    title: "Tablet Board Repair",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    icon: Tablet,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>

        <p className={styles.subtitle}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className={styles.card}>
                <Icon className={styles.icon} size={42} />

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#" className={styles.link}>
                  Learn More <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}