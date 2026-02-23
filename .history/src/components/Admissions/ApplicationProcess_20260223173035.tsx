import styles from "./ApplicationProcess.module.css";
import { FileText, FileCheck, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed.",
   
  },
  {
    icon: FileCheck,
    title: "Document Review",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada.",
     },
  {
    icon: MessageCircle,
    title: "Assessment Interview",
    description:
      "Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Proin eget tortor risus.",
     },
  {
    icon: CheckCircle,
    title: "Final Decision",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et.",
     },
];

export default function ApplicationProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>Application Process</h2>

        <p className={styles.subtitle}>
          Four simple steps to start your journey with us
        </p>

        <div className={styles.timeline}>

          <div className={styles.line}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className={styles.step}>

                <div className={styles.iconWrapper}>
                  <Icon size={22} />
                </div>

                <h3>{step.title}</h3>

                <p className={styles.description}>
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}