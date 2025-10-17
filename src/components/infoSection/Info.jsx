import { Truck, Headphones, ShieldCheck } from "lucide-react";
import "./info.css"

export default function InfoSection() {
    return (
        <section className="info-section">
            {/* Delivery */}

            <div className="info-card">
                <div className="rounded-full bg-gray-300 w-18 h-18 flex justify-center items-center">
                    <div className="rounded-full bg-[#000000] w-12 h-12 flex justify-center items-center ">
                        <Truck className="info-icon" />
                    </div>
                </div>
                <h3 className="info-title">FREE AND FAST DELIVERY</h3>
                <p className="info-text">Free delivery for all orders over $140</p>
            </div>

            {/* Customer Service */}
            <div className="info-card">
                <div className="rounded-full bg-gray-300 w-18 h-18 flex justify-center items-center">
                    <div className="rounded-full bg-[#000000]  w-12 h-12 flex justify-center items-center">
                        <Headphones className="info-icon" />
                    </div>
                </div>
                <h3 className="info-title">24/7 CUSTOMER SERVICE</h3>
                <p className="info-text">Friendly 24/7 customer support</p>
            </div>

            {/* Money Back */}
            <div className="info-card">
                <div className="rounded-full  bg-gray-300  w-18 h-18 flex justify-center items-center" >
                    <div className="rounded-full bg-[#000000]  w-12 h-12 flex justify-center items-center ">
                        <ShieldCheck className="info-icon" />
                    </div>
                </div>
                <h3 className="info-title">MONEY BACK GUARANTEE</h3>
                <p className="info-text">We return money within 30 days</p>
            </div>

        </section>
    );
}
