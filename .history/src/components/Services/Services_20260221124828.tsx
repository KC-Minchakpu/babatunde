"use client";

import styles from "./Services.module.css";
import {
  Layers,
  Monitor,
  TrendingUp,
  Cpu,
  Cloud,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Digital Solutions",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
    icon: Layers,
  },
  {
    title: "Computer Diagnostics",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    icon: Monitor,
  },
  {
    title: "Growth Strategy",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.",
    icon: TrendingUp,
  },
  {
    title: "Motherboard Repairs",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
    icon: Cpu,
  },
  {
    title: "Cloud Services",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    icon: Cloud,
  },
  {
    title: "Process Automation",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    icon: Settings,
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