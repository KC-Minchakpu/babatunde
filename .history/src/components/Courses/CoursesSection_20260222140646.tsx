"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CoursesSection.module.css";
import { Search, Clock, List, Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  hours: number;
  lessons: number;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  oldPrice: number;
  level: string;
  image: string;
  bestseller?: boolean;
  sale?: boolean;
}

const baseCourses: Course[] = [
  {
    id: 1,
    title: "Complete Machine Learning & AI Bootcamp",
    category: "DATA & ANALYTICS",
    instructor: "Dr. Maya Chen",
    hours: 42,
    lessons: 186,
    rating: 4.96,
    reviews: 4823,
    students: 32500,
    price: 149,
    oldPrice: 299,
    level: "Intermediate",
    image: "/images/motherboard.jpg",
    bestseller: true,
    sale: true,
  },
  {
    id: 2,
    title: "Advanced UI/UX Design Masterclass",
    category: "CREATIVE DESIGN",
    instructor: "Marcus Thompson",
    hours: 28,
    lessons: 124,
    rating: 4.92,
    reviews: 2156,
    students: 18400,
    price: 129,
    oldPrice: 249,
    level: "Advanced",
    image: "/images/motherboard.jpg",
    sale: true,
  },
  {
    id: 3,
    title: "Full-Stack React & Node.js Development",
    category: "SOFTWARE ENGINEERING",
    instructor: "Elena Rodriguez",
    hours: 52,
    lessons: 234,
    rating: 4.94,
    reviews: 5642,
    students: 41200,
    price: 169,
    oldPrice: 349,
    level: "Intermediate",
    image: "/images/motherboard.jpg",
    bestseller: true,
    sale: true,
  },
  {
    id: 4,
    title: "Growth Marketing: From Zero to Scale",
    category: "DIGITAL MARKETING",
    instructor: "James Okonkwo",
    hours: 24,
    lessons: 98,
    rating: 4.89,
    reviews: 1834,
    students: 15600,
    price: 99,
    oldPrice: 199,
    level: "All Levels",
    image: "/images/motherboard.jpg",
    sale: true,
  },
];

const courses: Course[] = [
  ...baseCourses,
  { ...baseCourses[0], id: 5 },
  { ...baseCourses[1], id: 6 },
  { ...baseCourses[2], id: 7 },
  { ...baseCourses[3], id: 8 },
];

export default function CoursesSection() {
  const [search, setSearch] = useState("");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Explore Our Courses</h2>
          <p>
            Discover 8 expert-led courses designed to help you master new
            skills and advance your career
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <label htmlFor="search" className={styles.visuallyHidden}>
              Search courses
            </label>
            <Search size={18} />
            <input
              id="search"
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.selectGroup}>
            <div className={styles.selectWrapper}>
              <label htmlFor="category" className={styles.visuallyHidden}>
                Filter by category
              </label>
              <select id="category">
                <option>All Categories</option>
              </select>
            </div>

            <div className={styles.selectWrapper}>
              <label htmlFor="level" className={styles.visuallyHidden}>
                Filter by level
              </label>
              <select id="level">
                <option>All Levels</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className={styles.image}
                />

                <div className={styles.badges}>
                  {course.bestseller && (
                    <span className={styles.bestseller}>Bestseller</span>
                  )}
                  {course.sale && (
                    <span className={styles.sale}>Sale</span>
                  )}
                </div>

                <span className={styles.level}>{course.level}</span>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>
                  {course.category}
                </span>
                <h3>{course.title}</h3>
                <p className={styles.instructor}>
                  by {course.instructor}
                </p>

                <div className={styles.meta}>
                  <span>
                    <Clock size={14} /> {course.hours} hours
                  </span>
                  <span>
                    <List size={14} /> {course.lessons} lessons
                  </span>
                </div>

                <div className={styles.rating}>
                  <Star size={14} />
                  <strong>{course.rating}</strong>
                  <span>({course.reviews.toLocaleString()})</span>
                  <span>
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <div className={styles.price}>
                  <span className={styles.newPrice}>
                    ${course.price}
                  </span>
                  <span className={styles.oldPrice}>
                    ${course.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}