"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const menu = [
        { name: "Dashboard", href: "/account" },
        { name: "Orders", href: "/account/orders" },
        { name: "Addresses", href: "/account/address" },
        { name: "Account details", href: "/account/account-details" },
        {name:"Log out",href:"/account/logout"}
    ];

    return (
        <aside className="py-16 md:py-20 xl:py-32 md:w-1/3 w-1/2 flex flex-col gap-5 ">
            
                {menu.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <p
                            className={`cursor-pointer text-gray-700
                                 hover:text-black ${pathname === item.href ? "font-semibold" : ""
                                }`}
                        >
                            {item.name}
                        </p>
                    </Link>
                ))}
                
           

            
        </aside>
    );
}
