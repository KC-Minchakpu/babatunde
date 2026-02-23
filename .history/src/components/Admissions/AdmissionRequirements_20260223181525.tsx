import styles from "./AdmissionRequirements.module.css";
import {
  FileText,
  GraduationCap,
  UserCheck,
  Globe,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

const requirements = [
  {
    icon: FileText,
    title: "Completed Application Form",
    description: "Complete the official admission application form.",
  },
  {
    icon: GraduationCap,
    title: "Official High School Transcripts",
    description: "Provide copies of your academic transcripts and certificates.",
  },
  {
    icon: UserCheck,
    title: "JAMB Scores (Optional)",
    description: "Submit your JAMB scores if you are applying for undergraduate programs.",
  },
  {
    icon: Globe,
    title: "Two Letters of Recommendation",
    description: "Provide two letters of recommendation from teachers or professionals.",
  },
  {
    icon: CreditCard,
    title: "Personal Essay (500-650 words)",
    description: "Write and submit a personal essay that showcases your personality and goals.",
  },
  {
    icon: HeartHandshake,
    title: "Recommendation Letter",
    description: "Submit at least one academic or professional reference.",
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