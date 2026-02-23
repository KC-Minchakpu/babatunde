import styles from "./AdmissionRequirements.module.css";
import {
  FileCheck,
  GraduationCap,
  BarChart3,
  Mail,
  PenLine,
  Banknote,
} from "lucide-react";

const requirements = [
  {
    icon: FileCheck,
    title: "Completed Application Form",
    description: "Complete the official admission application form.",
  },
  {
    icon: GraduationCap,
    title: "Official High School Transcripts",
    description: "Provide copies of your academic transcripts and certificates.",
  },
  {
    icon: BarChart3,
    title: "JAMB Scores (Optional)",
    description: "Submit your JAMB scores (This is optional).",
  },
  {
    icon: Mail,
    title: "Two Letters of Recommendation",
    description: "Provide two letters of recommendation from teachers or professionals.",
  },
  {
    icon: PenLine,
    title: "Personal Essay (500-650 words)",
    description: "Write and submit a personal essay that showcases your personality and goals.",
  },
  {
    icon: Banknote,
    title: "Application Fee Payment",
    description: "Submit the required application fee payment.",
  },
];

export default function AdmissionRequirements() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>
          Admission Requirements
        </h2>

        <p className={styles.subtitle}>
          Ensure you meet the following requirements before applying.
        </p>

        <div className={styles.grid}>
          {requirements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className={styles.card}>
                
                <div className={styles.iconBox}>
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}