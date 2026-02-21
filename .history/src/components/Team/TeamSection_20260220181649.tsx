import React from "react";
import styles from "./TeamSection.module.css";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Babatunde Reed",
    role: "YOUTH PASTOR",
    image: "/images/team1.jpg",
    bio: "Babatunde has been leading Baba T engineering for 25 years and is passionate about helping students grow in faith.",
  },
  {
    name: "Jessica Reed",
    role: "GIRLS MINISTRY DIRECTOR",
    image: "/images/team2.jpg",
    bio: "Jess leads our girls ministry and small group leaders. She loves coffee, worship, and mentoring students.",
  },
  {
    name: "Marcus Johnson",
    role: "GUYS MINISTRY DIRECTOR",
    image: "/images/team3.jpg",
    bio: "Marcus leads our guys ministry and high school outreach. Former college athlete with a heart for mentorship.",
  },
  {
    name: "Sofia Martinez",
    role: "MIDDLE SCHOOL COORDINATOR",
    image: "/images/team4.jpg",
    bio: "Sofia has a heart for middle schoolers navigating the awkward years and building strong faith foundations.",
  },
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <span className={styles.label}>MEET THE TEAM</span>
        <h2 className={styles.heading}>OUR LEADERS</h2>
        <p className={styles.subtitle}>
          We are re not just staff— we are people who genuinely care about your
          clients&apos; devices and our students Journey.
        </p>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.image}
                />
              </div>

              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;