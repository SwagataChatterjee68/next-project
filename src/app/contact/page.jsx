"use client";
import { useState } from "react";
import "./contact.css";

export default function AccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <main className="contact-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / <span className="font-medium text-black">Contact</span>
      </div>

      <div className="contact-wrapper">
        {/* --- Left Sidebar --- */}
        <aside className="contact-sidebar">
          <div className="contact-sidebar-box">
            <div className="border-b pb-8 border-b-[#D9D9D959]">
              <div className="contact-section-header">
                <div className="contact-icon"></div>
                <h3 className="font-semibold ">Call To Us</h3>
              </div>
              <p className="contact-text">
                We are available 24/7, 7 days a week.
              </p>
              <p className="contact-text font-medium mt-2">
                Phone: +8801611112222
              </p>
            </div>

            <div>
              <div className="contact-section-header">
                <div className="contact-icon"></div>
                <h3 className="font-semibold">Write To Us</h3>
              </div>
              <p className="contact-text mt-2 mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="contact-text mb-2">
                Email: <span className="font-medium">customer@exclusive.com</span>
              </p>
              <p className="contact-text">
                Email: <span className="font-medium">support@exclusive.com</span>
              </p>
            </div>
          </div>
        </aside>

        {/* --- Contact Form --- */}
        <div className="contact-form-box">
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Top Inputs */}
            <div className="contact-input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
            ></textarea>

            {/* Button */}
            <div className="text-right mt-5 md:mt-16">
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
