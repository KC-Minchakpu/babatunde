"use client";

import styles from "./Contact.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.header}>
          <h1>Let’s Stay Connected</h1>
          <p>
            At Baba T. Engineering, we specialize in delivering reliable electronic, hardware, and 
            software solutions designed to power performance and innovation. Whether you need expert 
            device repairs, circuit design, system upgrades, or technical consultation, our engineering 
            team is ready to assist. Get in touch with us today and let’s build smarter, more efficient 
            solutions together.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          
          {/* LEFT CARD */}
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <h3>Email Address</h3>
              <p>support@startup.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Office Location</h3>
              <p>Suites 227 – 230, Zey-Hub, <br> 
              Aminu Kano Crescent, Wuse II, Abuja</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Phone Number</h3>
              <p>+009 8754 3433 223</p>
            </div>

            <div className={styles.infoItem}>
              <h3>WhatsApp Number</h3>
              <p>+009 8754 3433 223</p>
            </div>

            <div className={styles.divider}></div>

            <div>
              <h3>Social Media</h3>
              <div className={styles.socials}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaBehance />
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className={styles.formCard}>
            <form>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Full name</label>
                  <input type="text" placeholder="David Wonder" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email address</label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Phone number</label>
                  <input type="text" placeholder="+009 3342 3432" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Subject</label>
                  <input type="text" placeholder="Type your subject" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
