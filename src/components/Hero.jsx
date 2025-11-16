import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Baby Photoshoot",
    img: "/images/baby.jpg",
  },
  {
    id: 2,
    title: "Wedding Photography",
    img: "/images/wedding.jpg",
  },
  {
    id: 3,
    title: "Maternity Shoot",
    img: "/images/maternity.jpg",
  },
  {
    id: 4,
    title: "Outdoor Photoshoot",
    img: "/images/outdoor.jpg",
  },
  {
    id: 5,
    title: "Modeling Portfolio",
    img: "/images/modeling.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section id="home" className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="overlay">
            <h1 className="slide-title">{slide.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
