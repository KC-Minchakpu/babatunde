"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo23.png" 
              alt="Baba T Logo"
              width={60} 
              height={60} 
            />
          </Link>
          <span className={styles.logoText}>Baba T</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>

          <div
  className={styles.dropdown}
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <Link href="/about" className={styles.dropdownToggle}>
    About
  </Link>

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
