"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  VscAccount,
  VscPackage,
  VscLocation,
  VscSignOut,
} from "react-icons/vsc";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menu = [
    { name: "Account details", href: "/account", icon: <VscAccount size={24} /> },
    { name: "Orders", href: "/account/orders", icon: <VscPackage size={24} /> },
    { name: "Addresses", href: "/account/address", icon: <VscLocation size={24} /> },
    { name: "Log out", href: "/account/logout", icon: <VscSignOut size={24} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <aside className="py-5 md:py-20 flex md:flex-col xl:py-32 md:w-1/3 w-full gap-2 md:gap-6">
        {menu.map((item) =>
          item.name === "Log out" ? (
            <button
              key={item.name}
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-2 text-left cursor-pointer text-gray-700 hover:text-black"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ) : (
            <Link key={item.name} href={item.href}>
              <p
                className={`flex items-center gap-2 cursor-pointer text-gray-700 hover:text-black ${
                  pathname === item.href ? "font-semibold" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </p>
            </Link>
          )
        )}
      </aside>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-between">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
