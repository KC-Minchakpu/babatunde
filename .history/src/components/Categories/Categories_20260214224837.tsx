import styles from "./Categories.module.css";

const categories = [
  {
    title: "Web Development",
    description: "Build modern websites and web applications",
    courses: "156 courses",
    icon: "💻",
    color: "blue",
  },
  {
    title: "Data Science",
    description: "Analyze data and build ML models",
    courses: "98 courses",
    icon: "📊",
    color: "purple",
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful user experiences",
    courses: "124 courses",
    icon: "🎨",
    color: "pink",
  },
  {
    title: "Business",
    description: "Grow your career and business",
    courses: "87 courses",
    icon: "💼",
    color: "orange",
  },
  {
    title: "Marketing",
    description: "Master digital marketing strategies",
    courses: "73 courses",
    icon: "📢",
    color: "green",
  },
  {
    title: "Mobile Development",
    description: "Build iOS and Android apps",
    courses: "91 courses",
    icon: "📱",
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
