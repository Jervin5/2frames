import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // <-- replace
        "YOUR_TEMPLATE_ID", // <-- replace
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY" // <-- replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="number"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button className="send-btn" type="submit">
            Send Message
          </button>
        </form>

        {/* SOCIAL MEDIA CARD */}
        <div className="social-media">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              className="icon instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} /> Instagram
            </a>

            <a
              href="https://wa.me/918124270526"
              className="icon whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} /> WhatsApp
            </a>

            <a
              href="https://facebook.com"
              className="icon facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
