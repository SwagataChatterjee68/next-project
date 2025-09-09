import { Truck, Headphones, ShieldCheck } from "lucide-react";
import "./info.css"

export default function InfoSection() {
    return (
        <section className="info-section">
            {/* Delivery */}

            <div className="info-card">
                <Truck className="info-icon" />
                <h3 className="info-title">FREE AND FAST DELIVERY</h3>
                <p className="info-text">Free delivery for all orders over $140</p>
            </div>

            {/* Customer Service */}
            <div className="info-card">
                <Headphones className="info-icon" />
                <h3 className="info-title">24/7 CUSTOMER SERVICE</h3>
                <p className="info-text">Friendly 24/7 customer support</p>
            </div>

            {/* Money Back */}
            <div className="info-card">
                <ShieldCheck className="info-icon" />
                <h3 className="info-title">MONEY BACK GUARANTEE</h3>
                <p className="info-text">We return money within 30 days</p>
            </div>


        </section>
    );
}
