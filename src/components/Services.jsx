import React from "react";

const services = [
  {
    id: 1,
    title: "Baby Photoshoot",
    desc: "Cute newborn & toddler photography with soft pastel themes.",
    className: "service baby",
  },
  {
    id: 2,
    title: "Wedding Photography",
    desc: "Cinematic wedding coverage with stunning golden tones.",
    className: "service wedding",
  },
  {
    id: 3,
    title: "Maternity Shoot",
    desc: "Elegant maternity portraits with gentle lighting.",
    className: "service maternity",
  },
  {
    id: 4,
    title: "Outdoor Photography",
    desc: "Nature-rich outdoor photoshoots with warm natural tones.",
    className: "service outdoor",
  },
  {
    id: 5,
    title: "Modeling Portfolio",
    desc: "Premium portfolio shoots with dramatic studio lighting.",
    className: "service modeling",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className={service.className}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
