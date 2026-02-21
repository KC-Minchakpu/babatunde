import styles from "./ContactSection.module.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT MAP */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightSide}>

          {/* Info cards here... */}

          <div className={styles.formCard}>
            <h2 className={styles.heading}>
              <span className={styles.bar}></span>
              Get in Touch
            </h2>

            <p className={styles.description}>
               At Baba T. Engineering, we specialize in delivering reliable electronic, hardware, and 
            software solutions designed to power performance and innovation. Whether you need expert 
            device repairs, circuit design, system upgrades, or technical consultation, our engineering 
            team is ready to assist. Get in touch with us today and let’s build smarter, more efficient 
            solutions together.
            </p>

            <form className={styles.form}>
              <div className={styles.row}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={5}></textarea>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.button}>
                  Send Message
                </button>

                {/* SOCIAL ICONS */}
                <div className={styles.socials}>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}