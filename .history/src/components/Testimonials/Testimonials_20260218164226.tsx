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
    name: "Janet Ojochide Daniels",
    role: "Software Engineer at Stripe",
    image: "/images/student1.jpg",
    text: `Baba T Engineering helped me fix my laptop within a short time. Their expertise and professionalism are unmatched. I highly recommend their services to anyone facing device issues.`,
  },
  {
    name: "Kevin Cross Minchakpu",
    role: "Full Stack Developer",
    image: "/images/kevin.jpg",
    
    text: `I was told that my system motherboard was faulty and needed replacement. Baba T Engineering diagnosed the issue quickly and replaced it at a reasonable cost.`,
  },
  {
    name: "James Wilson",
    role: "Product Designer at Figma",
    image: "/images/student3.jpg",
    text: `I was trained by Baba T Engineering and it was an incredible experience. The hands-on training and real-world projects helped me gain the skills I needed to excel in my career.`,
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
