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
    title: "Application Form",
    description: "Complete the official admission application form.",
  },
  {
    icon: GraduationCap,
    title: "Academic Certificates",
    description: "Provide copies of your academic transcripts and certificates.",
  },
  {
    icon: UserCheck,
    title: "Identification",
    description: "Submit a valid means of identification.",
  },
  {
    icon: Globe,
    title: "Proof of English",
    description: "Provide proof of English proficiency if required.",
  },
  {
    icon: CreditCard,
    title: "Application Fee",
    description: "Pay the required non-refundable application fee.",
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