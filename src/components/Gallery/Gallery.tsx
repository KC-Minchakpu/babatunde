"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

type ImageType = {
  src: string;
  title: string;
  description: string;
};

const images: ImageType[] = Array.from({ length: 36 }).map((_, i) => ({
  src: `/images/img${(i % 9) + 1}.jpg`, // reuse 9 images
  title: "Fading Light",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim perferendis quae iusto omnis praesentium labore tempore eligendi quo corporis sapiente.",
}));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev !== null ? (prev + 1) % images.length : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev !== null ? (prev - 1 + images.length) % images.length : 0
      );
    }
  };

  return (
    <section className={styles.gallerySection}>
      <h1 className={styles.title}>Portrait Gallery</h1>

      <div className={styles.grid}>
        {images.map((img, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
  &times;
</button>

          <button className={styles.prev} onClick={prevImage}>
            ❮
          </button>

          <div className={styles.modalContent}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                fill
                className={styles.modalImage}
              />
            </div>

            <div className={styles.caption}>
              <h3>{images[selectedIndex].title}</h3>
              <p>{images[selectedIndex].description}</p>
            </div>
          </div>

          <button className={styles.next} onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </section>
  );
}