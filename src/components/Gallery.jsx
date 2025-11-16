import React from "react";
import babyshoot1 from '../assests/Babyshoot/baby_1.jpg'
import babyshoot2 from '../assests/Babyshoot/baby_2.jpg'
import brideshoot1 from '../assests/Brideshoot/bride-1.jpg'
import brideshoot2 from '../assests/Brideshoot/bride-2.jpg'
import maternity1 from '../assests/Maternityshoot/maternity-1.jpg'
import maternity2 from '../assests/Maternityshoot/maternity-2.jpg'
import wedding1 from '../assests/Weddingshoot/wedding-1.jpg'
import wedding2 from '../assests/Weddingshoot/wedding-2.jpg'

const galleryImages = [
  babyshoot1,
  babyshoot2,
  brideshoot1,
  brideshoot2,
  maternity1,
  maternity2,
  wedding1,
  wedding2,
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="masonry">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="masonry-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={src} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}
