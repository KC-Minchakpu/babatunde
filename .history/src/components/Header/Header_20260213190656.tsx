"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoCircle}>Ed</span>
          <span className={styles.logoText}>Academy</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className={styles.dropdownToggle}>About</span>

            {isOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/about/history">Our History</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/about/mission">Mission & Vision</Link>
                <Link href="/about/values">Core Values</Link>
                <Link href="/about/careers">Careers</Link>
              </div>
            )}
          </div>

          <Link href="/students-life">Students Life</Link>
          <Link href="/services">Services</Link>
          <Link href="/training-programs">Training Programs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Auth Buttons */}
        <div className={styles.actions}>
          <button className={styles.signIn}>Sign In</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
