"use client";

export default function AccountPage() {
  return (
    <main className="2xl:max-w-7xl md:max-w-6xl mx-auto px-4 py-32">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-5 flex justify-between">
        <div>
          Home / <span className="text-black font-medium">My Account</span>
        </div>
        <p className="text-sm text-gray-700">
          Welcome! <span className="text-[#FF4000] font-medium">Md Rimel</span>
        </p>
      </div>

      <div className="flex justify-between mt-10 flex-wrap">
        {/* --- Left Sidebar --- */}
        <aside className=" border-gray-200 mt-10">
          <div>
            <h2 className="text-black font-medium mb-2">Manage My Account</h2>
            <ul className="space-y-2 text-sm">
              <li className="text-[#DB4444] font-medium cursor-pointer">My Profile</li>
              <li className="text-gray-700 hover:text-black cursor-pointer">Address Book</li>
              <li className="text-gray-700 hover:text-black cursor-pointer">My Payment Options</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-black font-medium mb-2">My Orders</h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-700 hover:text-black cursor-pointer">My Returns</li>
              <li className="text-gray-700 hover:text-black cursor-pointer">My Cancellations</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-black font-medium mb-2">My Wishlist</h2>
          </div>
        </aside>

        {/* --- Edit Profile Section --- */}
        <section className=" shadow-2xl rounded-md px-24 py-5 border border-gray-200 ">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-red-500">Edit Your Profile</h2>
          </div>

          <form className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-[#D9D9D959] outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Password Changes */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Password Changes</label>
              <div className="space-y-4">
                <input
                  type="password"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  className="w-full border border-gray-300 bg-[#D9D9D959]  rounded-sm px-3 py-2 outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-4">
              <button type="button" className="text-gray-700 hover:text-black">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#FF8400] text-white px-6 py-2 rounded-sm text-[16px] hover:bg-orange-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
