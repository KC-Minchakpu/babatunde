"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./CoursesSection.module.css";
import { Search, Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string; // ✅ NEW
  category: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  level: string;
  image: string;
}

const baseCourses: Course[] = [
  {
    id: 1,
    title: "Literacy Course",
    description:
      "Master the skills of reading, writing, and communication to unlock new opportunities in education and career.",
    category: "CAREER TRAINING",
    instructor: "Dr. Maya Chen",
    rating: 4.96,
    reviews: 4823,
    students: 32500,
    duration: "12 weeks",
    level: "Intermediate",
    image: "/images/read.jpg",
  },
  {
    id: 2,
    title: "Hardware Engineering",
    description:
      "Learn to repair, install, and optimize computer hardware components for performance.",
    category: "CAREER TRAINING",
    instructor: "Baba T",
    rating: 4.92,
    reviews: 2156,
    students: 18400,
    duration: "8 weeks",
    level: "Advanced",
    image: "/images/engineer.jpg",
  },
  {
    id: 3,
    title: "Chip Level Engineering",
    description:
      "Learn the fundamentals of semiconductor design and digital logic circuits.",
    category: "CAREER TRAINING",
    instructor: "Elena Rodriguez",
    rating: 4.94,
    reviews: 5642,
    students: 41200,
    duration: "10 weeks",
    level: "Intermediate",
    image: "/images/chip.jpg",
  },
  {
    id: 4,
    title: "Growth Marketing: From Zero to Scale",
    description:
      "Learn data-driven marketing strategies to grow brands from startup to scale.",
    category: "DIGITAL MARKETING",
    instructor: "James Okonkwo",
    rating: 4.89,
    reviews: 1834,
    students: 15600,
    duration: "6 weeks",
    level: "All Levels",
    image: "/images/motherboard.jpg",
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
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Explore Our Programs</h2>
          <p>
            Discover our expert-led programs designed to help you master new
            skills and advance your career
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.selectGroup}>
            <div className={styles.selectWrapper}>
              <select aria-label="Filter by category">
                <option>All Categories</option>
              </select>
            </div>

            <div className={styles.selectWrapper}>
              <select aria-label="Filter by level">
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

                <span className={styles.level}>{course.level}</span>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                {/* ✅ NEW DESCRIPTION */}
                <p className={styles.description}>
                  {course.description}
                </p>

                <p className={styles.instructor}>
                  by {course.instructor}
                </p>

                <div className={styles.rating}>
                  <Star size={14} />
                  <strong>{course.rating}</strong>
                  <span>({course.reviews.toLocaleString()})</span>
                  <span>
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <div className={styles.footer}>
                  <span className={styles.duration}>
                    {course.duration}
                  </span>

                  <button
                    className={styles.enrollBtn}
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}