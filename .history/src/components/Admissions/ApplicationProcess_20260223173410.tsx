import styles from "./ApplicationProcess.module.css";
import { FileText, FileCheck, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Complete and submit your application form along with all required academic records and supporting documents for initial consideration.",
   
  },
  {
    icon: FileCheck,
    title: "Document Review",
    description:
      "Our admissions team carefully evaluates your submitted documents to verify eligibility, qualifications, and program fit.",
     },
  {
    icon: MessageCircle,
    title: "Assessment Interview",
    description:
      "Qualified applicants are invited for an interview to assess their interests, goals, and readiness for the program.",
     },
  {
    icon: CheckCircle,
    title: "Final Decision",
    description:
      "After the full evaluation process, successful applicants receive an official admission decision and next steps for enrollment.",
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