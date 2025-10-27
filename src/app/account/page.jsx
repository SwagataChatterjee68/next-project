"use client";

export default function AccountPage() {
    return (
        <div className="">
               <section className=" rounded-md xl:px-5 px-5 py-10  lg:mt-0 mt-20 border border-gray-200 ">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-700">Edit Your Profile</h2>
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
            <div className="flex justify-end items-center gap-10">
              <button type="button" className="text-gray-700 hover:text-black">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#FF8400] text-white md:px-6 px-4 py-2 md:py-4 font-medium rounded-sm text-[16px] hover:bg-orange-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
        </div>
    );
}
