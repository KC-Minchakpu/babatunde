"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isAboutActive = () => pathname.startsWith("/about");

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
          <Link
            href="/"
            className={isActive("/") ? styles.active : ""}
          >
            Home
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link
              href="/about"
              className={`${styles.dropdownToggle} ${
                isAboutActive() ? styles.active : ""
              }`}
            >
              About
            </Link>

            {isOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/about/history" className={isActive("/about/history") ? styles.active : ""}>
                  Our History
                </Link>
                <Link
                  href="/about/team"
                  className={
                    isActive("/about/team") ? styles.active : ""
                  }
                >
                  Our Team
                </Link>
                <Link href="/about/mission" className={isActive("/about/mission") ? styles.active : ""}>
                  Mission & Vision
                </Link>
                <Link href="/about/values" className={isActive("/about/values") ? styles.active : ""}>
                  Core Values
                </Link>
                <Link href="/about/trainings" className={isActive("/about/trainings") ? styles.active : ""}>
                  Trainings
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/admissions"
            className={
              isActive("/admissions") ? styles.active : ""
            }
          >
            Admissions
          </Link>

          <Link
            href="/services"
            className={isActive("/services") ? styles.active : ""}
          >
            Services
          </Link>

          <Link
            href="/training-programs"
            className={
              isActive("/training-programs") ? styles.active : ""
            }
          >
            Training Programs
          </Link>

          <Link
            href="/blog"
            className={isActive("/blog") ? styles.active : ""}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? styles.active : ""}
          >
            Contact Us
          </Link>
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