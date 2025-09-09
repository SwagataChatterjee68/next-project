"use client";
import { useState } from "react";
import "./contact.css"; // make sure this path is correct

export default function ContactPage() {
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
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Breadcrumb */}
        <p className="contact-breadcrumb">
          Home / <span className="text-black">Contact</span>
        </p>

        <div className="contact-grid">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Call Us */}
            <div className="contact-card">
              <div className="flex items-start space-x-4">
                <div className="contact-icon"></div>
                <div>
                  <h3 className="contact-title">Call To Us</h3>
                  <p className="contact-sub">We are available 24/7, 7 days a week.</p>
                  <p className="contact-text">Phone: +8801611112222</p>
                </div>
              </div>
            </div>

            {/* Write To Us */}
            <div className="contact-card">
              <div className="flex items-start space-x-4">
                <div className="contact-icon"></div>
                <div>
                  <h3 className="contact-title">Write To Us</h3>
                  <p className="contact-sub">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="contact-text">
                    Emails: customer@exclusive.com <br />
                    support@exclusive.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Top Fields */}
              <div className="contact-input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
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
              <button type="submit" className="contact-btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
