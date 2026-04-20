"use client";

import styles from "./Contact.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          
          {/* HEADER */}
          <div className={styles.header}>
            <h1>Let’s Stay Connected</h1>
            <p>
              At Baba T. Engineering, we specialize in delivering reliable electronic, hardware, and 
              software solutions designed to power performance and innovation. Whether you need expert 
              device repairs, circuit design, system upgrades, or technical consultation, our engineering 
              team is ready to assist.
            </p>
          </div>

          {/* GRID */}
          <div className={styles.grid}>
            
            {/* LEFT CARD */}
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <h3>Email Address</h3>
                <p>support@babatengineering.com</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Office Location</h3>
                <p>
                  Suites 227 – 230, Zey-Hub <br />
                  Aminu Kano Crescent <br />
                  Wuse II, Abuja, Nigeria
                </p>
              </div>

              <div className={styles.infoItem}>
                <h3>Phone Number</h3>
                <p>+234 803 059 6339</p>
              </div>

              <div className={styles.infoItem}>
                <h3>WhatsApp Number</h3>
                <p>+234 803 059 6339</p>
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
                    <input type="text" placeholder="Your Name" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Email address</label>
                    <input type="email" placeholder="Your Email" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label>Phone number</label>
                    <input type="text" placeholder="+234..." />
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

      {/* ================= FULL WIDTH MAP ================= */}
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8714247679864!2d7.461927773673673!3d9.075476288262495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75954596213b%3A0x5c9b2156f69eb01c!2sZEY%20HUB!5e0!3m2!1sen!2sng!4v1776536935484!5m2!1sen!2sng"
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}