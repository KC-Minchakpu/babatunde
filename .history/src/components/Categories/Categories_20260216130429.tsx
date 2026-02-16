import styles from "./Categories.module.css";

const categories = [
  {
    title: "Hardware Installations",
    description: "Cloning, upgrading, and troubleshooting hardware",
    icon: "💻",
    color: "blue",
  },
  {
    title: "Software Installations",
    description: "Software installation, configuration, and optimization",
   icon: "📊",
    color: "purple",
  },
  {
    title: "Computer Repairs",
    description: "Repairing and maintaining computers and peripherals",
    icon: "🎨",
    color: "pink",
  },
  {
    title: "Circuit Design",
    description: "Designing and prototyping electronic circuits",
    icon: "💼",
    color: "orange",
  },
  {
    title: "Mobile Phone Repairs",
    description: "Repairing and maintaining mobile phones",
    icon: "📱",
    color: "green",
  },
  {
    title: "Power Supply Solutions",
    description: "Designing and building power supply systems",
    icon: "⚡",
    color: "cyan",
  },
  {
    title: "Cloud Computing",
    description: "Deploy scalable cloud solutions",
    courses: "65 courses",
    icon: "☁️",
    color: "indigo",
  },
  {
    title: "Photography",
    description: "Capture stunning visuals",
    courses: "52 courses",
    icon: "📷",
    color: "red",
  },
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Explore Our Top Services</h2>
          <p>
            Find the perfect Service from our wide selection of Services
            handled by industry experts.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.icon} ${styles[cat.color]}`}>
                {cat.icon}
              </div>

              <h3>{cat.title}</h3>
              <p>{cat.description}</p>

              <span className={styles.courses}>
                {cat.courses} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
