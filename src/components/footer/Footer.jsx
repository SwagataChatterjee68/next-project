import Image from "next/image";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";
import "./footer.css"

const Footer = () => {
  return (

    <footer className="footer-wrapper">
      <div className="footer-container">


        {/* Top Section */}
        <div className="footer-grid">
          {/* Subscribe */}
          <div>
            <h3 className="footer-title">Subscribe</h3>
            <div className="footer-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="footer-btn">
                <AiOutlineSend />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="footer-title">Account</h3>
            <ul className="footer-list">
              <Link href="/">My Account</Link>
              <Link href="/">Login/ Register</Link>
              <Link href="/">Cart</Link>
              <Link href="/">Wishlist</Link>
              <Link href="/">Shop</Link>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="footer-title">Quick Link</h3>
            <ul className="footer-list">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms Of Use</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Contact</Link>
            </ul>
          </div>

          {/* Download Apps */}
          <div className="footer-apps">
            <h3 className="footer-title">Download Apps</h3>
            <p className="mb-2 text-sm">Save $3 with App New User Only</p>

            <div className="flex gap-2">
              <Image src="/QR.jpg" alt="qr" width={76} height={76} />
              <div className="flex flex-col">
                <img
                  src="/play store.png"
                  alt="Google Play"
                  className="h-10"
                />
                <img src="/app store.png" alt="App Store" className="h-10" />
              </div>
            </div>

            <div className="footer-socials">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
