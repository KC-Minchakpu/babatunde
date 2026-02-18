import React from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Thompson",
    role: "Software Engineer at Stripe",
    image: "/images/student1.jpg",
    text: `Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical.`,
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist at Meta",
    image: "/images/student2.jpg",
    
    text: `The machine learning courses are top-notch. I went from knowing basic Python to building production ML models. Now I work as a data scientist at a top tech company.`,
  },
  {
    name: "James Wilson",
    role: "Product Designer at Figma",
    image: "/images/student3.jpg",
    text: `As a self-taught designer, Learnify filled all the gaps in my knowledge. The UI/UX courses taught me professional workflows and helped me land my dream job.`,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <span className={styles.smallTitle}>SUCCESS STORIES</span>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <p className={styles.subtitle}>
          Join thousands of clients who have transformed their devices with our expertise.
        </p>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className={styles.text}>&quot;{item.text}&quot;</p>

               <div className={styles.profile}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="50px"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
