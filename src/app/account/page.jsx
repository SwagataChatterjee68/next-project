"use client";
import { useState } from "react";
import "./account.css"

export default function AccountPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / <span className="breadcrumb-current">My Account</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Manage My Account</h3>
          <ul className="space-y-2">
            <li className="sidebar-link-active">My Profile</li>
            <li className="sidebar-link">Address Book</li>
            <li className="sidebar-link">My Payment Options</li>
          </ul>

          <h3 className="sidebar-title mt-6">My Orders</h3>
          <ul className="space-y-2">
            <li className="sidebar-link">My Returns</li>
            <li className="sidebar-link">My Cancellations</li>
          </ul>

          <h3 className="sidebar-title mt-6">My Wishlist</h3>
        </aside>

        {/* Profile Form */}
        <div className="profile-wrapper">
          <div className="profile-card">
            <h2 className="profile-title">Edit Your Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="form-grid">
                <div>
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-grid">
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="form-grid">
                <div>
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button type="button" className="btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
