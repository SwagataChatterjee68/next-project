// "use client";
// import { useState } from "react";
// import "./contact.css"; // make sure this path is correct

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-container">
//         {/* Breadcrumb */}
//         <p className="contact-breadcrumb">
//           Home / <span className="text-black">Contact</span>
//         </p>

//         <div className="contact-grid">
//           {/* Left Section */}
//           <aside className="space-y-6">
//             <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-md">
//               <div className="flex items-center gap-4 mb-2">
//                 <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
//                 <h3 className="font-semibold">Call To Us</h3>
//               </div>
//               <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
//               <p className="text-sm text-gray-700 mt-2 font-medium">Phone: +8801611112222</p>
//             </div>

//             <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-md">
//               <div className="flex items-center gap-4 mb-2">
//                 <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
//                 <h3 className="font-semibold">Write To US</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Fill out our form and we will contact you within 24 hours.
//               </p>
//               <p className="text-sm text-gray-700 mt-2">
//                 Emails: <span className="font-medium">customer@exclusive.com</span>
//               </p>
//               <p className="text-sm text-gray-700">
//                 Emails: <span className="font-medium">support@exclusive.com</span>
//               </p>
//             </div>
//           </aside>

//           {/* Right Section - Form */}
//           <div className="md:col-span-2">
//             <form onSubmit={handleSubmit} className="contact-form">
//               {/* Top Fields */}
//               <div className="contact-input-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name *"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="contact-input"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email *"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="contact-input"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone *"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="contact-input"
//                 />
//               </div>

//               {/* Message */}
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={6}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="contact-textarea"
//               ></textarea>

//               {/* Button */}
//               <button type="submit" className="contact-btn">
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import "./contact.css"; // make sure this path is correct
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
    <main className="max-w-7xl mx-auto px-16 py-32 ">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / <span className="text-black font-medium">Contact</span>
      </div>


      <div className="flex justify-between mt-10 gap-10">
        {/* --- Left Sidebar --- */}
        <aside className="w-[340px] h-[457px] ">
          <div className=" border border-gray-200 shadow-sm p-6 rounded-md flex flex-col gap-10 ">
            <div className=" ">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-[40px] h-[40px] bg-[#FF4000] rounded-full"></div>
                <h3 className="font-semibold">Call To Us</h3>
              </div>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm text-gray-700 mt-2 font-medium">Phone: +8801611112222</p>
            </div>
            <div>
              <div className="flex items-center gap-4  mb-5">
                <div className="w-[40px] h-[40px] bg-[#FF4000] rounded-full "></div>
                <h3 className="font-semibold">Write To US</h3>
              </div>
              <p className="text-sm text-gray-600 mb-5">
                Fill out our form and we will contact you within 24 hours.

              </p>
              <p className="text-sm text-gray-700 mb-5">
                Emails: <span className="font-medium">customer@exclusive.com</span>
              </p>
              <p className="text-sm text-gray-700 mb-8">
                Emails: <span className="font-medium">support@exclusive.com</span>
              </p>
            </div>
          </div>
        </aside>


        {/* --- Edit Profile Section --- */}

        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="contact-form w-[756px] ">
            {/* Top Fields */}
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
            <div className="text-right mt-20">
              <button type="submit" className="contact-btn">
                Save Changes
              </button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}
