
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className="max-w-8xl  px-6 py-10  border-b border-gray-700">
                {/* Top Section */}
                <div className=" mx-auto px-10 py-20 grid md:grid-cols-5 gap-20  ">
                    {/* Logo */}

                    <div>
                        
                        <h3 className="font-semibold mb-4">Subscribe </h3>
                        <div className="flex mt-3 border border-white font-Poppins">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md  text-sm w-full outline-none "
                            />

                            <button className=" px-4 text-white font-medium text-medium">
                                <AiOutlineSend />
                            </button>
                        </div>
                    </div>

                    {/* Shop By */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm flex flex-col gap-2">
                            <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                            <li>exclusive@gmail.com</li>
                            <li>+88015-88888-9999</li>

                        </ul>
                    </div>

                    {/* Renewed */}
                    <div>
                        <h3 className="font-semibold mb-4">Account</h3>
                        <ul className="space-y-2 text-sm flex flex-col gap-2">
                            <Link href="/">My Account</Link>
                            <Link href="/">Login/ Register</Link>
                            <Link href="/">Cart</Link>
                            <Link href="/">Wishlist</Link>
                            <Link href="/">Shop</Link>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Link</h3>
                        <ul className="space-y-2 text-sm flex flex-col gap-2">
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms Of Use</Link>
                            <Link href="/">FAQ</Link>
                             <Link href="/">Contact</Link>

                        </ul>
                    </div>

                    {/* Zalami */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold mb-4">Download Apps</h3>
                        <p className="mb-2 text-sm">Save $3 with App New User Only </p>

                        <div className="flex gap-2  ">
                            <Image src="/QR.jpg" alt="qr" width={76} height={76} />
                            <div className="flex flex-col">
                                <img src="/play store.png" alt="Google Play " className="h-10" />
                                <img src="/app store.png" alt="App Store" className="h-10"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CiFacebook />
                            <CiTwitter />
                            <CiInstagram />
                            <CiLinkedin />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer