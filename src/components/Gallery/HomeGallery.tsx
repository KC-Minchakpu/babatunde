"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HomeGallery.module.css";
import Link from "next/link";

type ImageType = {
  src: string;
  title: string;
  description: string;
};

const images: ImageType[] = [
  {
    src: "/images/img1.webp",
    title: "Fading Light",
    description: "A quiet forest fading into mist.",
  },
  {
    src: "/images/img2.webp",
    title: "Forest Path",
    description: "A calm walk through towering trees.",
  },
  {
    src: "/images/img3.webp",
    title: "Butterflies",
    description: "Delicate motion captured in stillness.",
  },
  {
    src: "/images/img4.webp",
    title: "Flowing Stream",
    description: "Nature’s rhythm in motion.",
  },
];

export default function HomeGallery() {
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

  // Keyboard navigation
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
      <h2 className={styles.title}>Our Gallery</h2>

      {/* 4x1 GRID */}
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

      {/* ✅ VIEW MORE BUTTON */}
      <div className={styles.buttonWrapper}>
        <Link href="/gallery">
          <button type="button" className={styles.viewMoreBtn}>
            View More →
          </button>
        </Link>
      </div>

      {/* MODAL */}
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