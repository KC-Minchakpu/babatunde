"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

type ImageType = {
  src: string;
  title: string;
  description: string;
};

const images: ImageType[] = Array.from({ length: 36 }).map((_, i) => ({
  src: `/images/img${i + 1}.webp`,
  title: `Photo ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim perferendis quae iusto omnis praesentium labore tempore eligendi quo corporis sapiente.",
}));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );
  };

  // ✅ Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className={styles.gallerySection}>
      <h1 className={styles.title}>Our Gallery</h1>

      <p className={styles.description}>
        Explore a curated collection of our past graduation portraits, and other memorable moments.
      </p>

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

      {/* ✅ MODAL */}
      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
          <button
  type="button"
  className={styles.closeBtn}
  onClick={closeModal}
  aria-label="Close modal"
>
  &times;
</button>

<button
  type="button"
  className={styles.prev}
  onClick={prevImage}
  aria-label="Previous image"
>
  ❮
</button>

            {/* Prev */}
            <button
  type="button"
  className={styles.prev}
  onClick={prevImage}
  aria-label="Previous image"
>
  ❮
</button>

            {/* Image */}
            <div className={styles.modalImageWrapper}>
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                fill
                className={styles.modalImage}
              />
            </div>

            {/* Caption */}
            <div className={styles.caption}>
              <h3>{images[selectedIndex].title}</h3>
              <p>{images[selectedIndex].description}</p>
            </div>

            {/* Next */}
            <button className={styles.next} onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
}