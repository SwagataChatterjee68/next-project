"use client";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

export default function EditAddressPage() {
  const router = useRouter();
  return (
    <div className="mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing address */}
        <div className="border border-gray-200 rounded-md px-8 py-6 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Billing address</h2>
            <button className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
              <Pencil onClick={() => router.push("/account/address/billing-form")} size={16} className="text-gray-600" />
            </button>
          </div>
          <p className="text-gray-500 text-[14px]">
            You have not set up this type of address yet.
          </p>
        </div>

        {/* Shipping address */}
        <div className="border border-gray-200 rounded-md px-8 py-6 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Shipping address</h2>
            <button className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
              <Pencil  onClick={() => router.push("/account/address/shipping-form")} size={16} className="text-gray-600" />
            </button>
          </div>
          <p className="text-gray-500 text-[14px]">
            You have not set up this type of address yet.
          </p>
        </div>
      </div>
    </div>
  );
}
