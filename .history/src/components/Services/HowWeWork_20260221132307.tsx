import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.header}>

          <h2>How We Work</h2>

          <p>
            At Baba T Engineering, we follow a professional, transparent,
            and efficient process to repair devices and train future engineers
            using industry-standard tools and methods.
          </p>

        </div>



        <div className={styles.grid}>


          <div className={styles.card}>

            <span className={styles.number}>01</span>

            <h3>Device Inspection & Consultation</h3>

            <p>
              We carefully examine your device to identify the fault and
              provide expert advice, repair options, and cost estimates.
            </p>

          </div>



          <div className={styles.card}>

            <span className={styles.number}>02</span>

            <h3>Diagnosis & Repair Planning</h3>

            <p>
              Our engineers perform detailed diagnostics and create a repair
              plan using professional tools and genuine components.
            </p>

          </div>



          <div className={styles.card}>

            <span className={styles.number}>03</span>

            <h3>Professional Repair & Testing</h3>

            <p>
              We repair your smartphone, laptop, or electronic device and
              conduct full testing to ensure everything works perfectly.
            </p>

          </div>



          <div className={styles.card}>

            <span className={styles.number}>04</span>

            <h3>Delivery & Customer Support</h3>

            <p>
              Your repaired device is safely returned, and we provide guidance
              and ongoing support to ensure long-term performance.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}