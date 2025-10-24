"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ShippingFormPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        street: "",
        apartment: "",
        city: "",
        district: "",
        postcode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Shipping Address Data:", formData);
    };

    return (
        <div className="2xl:max-w-7xl md:max-w-6xl mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-10">
                Shipping address
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First and Last name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            First name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Last name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Company name (optional)
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Country / Region *
                    </label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                    >
                        <option value="">Select a country / region…</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                </div>

                {/* Street */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Street address *
                    </label>
                    <input
                        type="text"
                        name="street"
                        placeholder="House number and street name"
                        value={formData.street}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:ring-1 focus:ring-black focus:outline-none"
                    />
                    <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                    />
                </div>

                {/* City and District */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Town / City *
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">District *</label>
                        <select
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                        >
                            <option value="">Select an option…</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                    </div>
                </div>

                {/* Postcode */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Postcode / ZIP (optional)
                    </label>
                    <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-black focus:outline-none"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                        Save address
                    </button>
                </div>
            </form>
        </div>
    );
}
