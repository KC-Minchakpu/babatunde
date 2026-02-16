import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* LEFT BRAND AREA */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoBox}></div>
              <span>Baba T. Engineering</span>
            </div>

            <p>
              Forge Your Future. Transform your Devices with expert-led services
              trusted by 100,000+ Clients worldwide.
            </p>

            <div className={styles.socials}>
              <span>𝕏</span>
              <span>in</span>
              <span>▶</span>
              <span>📷</span>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className={styles.linksGrid}>
            <div>
              <h4>CATEGORIES</h4>
              <a>Software</a>
              <a>Hardware</a>
              <a>Circuit</a>
              <a>Computer Repairs</a>
              <a>MacBook Repairs</a>
            </div>

            <div>
              <h4>COMPANY</h4>
              <a>About Us</a>
              <a>Trainings</a>
              <a>Become a Student</a>
              <a>Blog</a>
              <a>Contact</a>
            </div>

            <div>
              <h4>SUPPORT</h4>
              <a>Help Center</a>
              <a>FAQ</a>
              <a>Accessibility</a>
              <a>Sitemap</a>
            </div>

            <div>
              <h4>LEGAL</h4>
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
              <a>Cookie Policy</a>
              <a>Licenses</a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <p>© 2026 Baba T Engineering. All rights reserved.</p>

          <div className={styles.bottomLinks}>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
