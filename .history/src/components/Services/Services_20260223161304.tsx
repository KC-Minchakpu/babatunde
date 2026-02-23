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
  Users,
} from "lucide-react";

const services = [
  {
    title: "Smartphone Board Repair",
    description:
      "We specialize in diagnosing and repairing smartphone motherboard faults caused by power issues, water damage, short circuits, and component failure. Our technicians use advanced tools and precision techniques to restore full functionality.",
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
      "Our circuit board repair service focuses on identifying and fixing damaged, burnt, or malfunctioning components on electronic boards. Whether caused by electrical faults, physical damage, or wear, we provide reliable repairs...",
    icon: CircuitBoard,
  },
  {
    title: "Tablet Board Repair",
    description:
      "We provide expert tablet motherboard repair for devices experiencing charging problems, no power, display faults, or system failure. Our careful diagnostics and micro-soldering expertise ensure your tablet is restored safely and efficiently.",
    icon: Tablet,
  },
  {
    title: "ITF Student Training",
    description:
      "Structured Industrial Training Fund (ITF) programs designed to equip students with practical, hands-on engineering experience. Our training bridges academic theory with real-world technical applications, preparing students for professional excellence in engineering and related fields. ",
    icon: Users,
  },
  {
    title: "Mentorship & Startup Support",
    description:
      "Comprehensive mentorship and startup support services focused on nurturing innovation and technical entrepreneurship. We guide emerging engineers and startups with industry insights, technical advisory, project development support, and strategic direction to transform ideas into sustainable engineering solutions.",
    icon: Users,
  },
  {
    title: "BIOS Repair & Recovery",
    description:
      "Professional diagnostics and replacement of faulty BIOS chips and integrated circuits (ICs) to restore optimal system functionality. Our service ensures precise component-level troubleshooting, safe chip reprogramming, and reliable hardware recovery for computers and embedded electronic systems.",
    icon: Cpu,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>

        <p className={styles.subtitle}>
         Baba T. Engineering Limited offers specialized technical and engineering solutions with a focus on precision and innovation. Our services include laptop motherboard repair, chip-level diagnostics, BIOS and IC replacement, hardware troubleshooting, and general laptop servicing. Beyond technical repairs, we provide professional development through technical training, engineering courses, ITF student training, mentorship programs, and startup support—empowering the next generation of engineers and innovators.
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