import { CiHeadphones } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import { LuGamepad } from "react-icons/lu";
import "./category.css"; // adjust path if needed

const Category = () => {
    const category = [
        { id: 1, name: "Phones", icon: <IoIosPhonePortrait /> },
        { id: 2, name: "Computers", icon: <HiOutlineComputerDesktop /> },
        { id: 3, name: "SmartWatch", icon: <TbDeviceWatchStats /> },
        { id: 4, name: "Camera", icon: <AiOutlineCamera /> },
        { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
        { id: 6, name: "Gaming", icon: <LuGamepad /> },
    ];

    return (

        <section className="category-section">

            <div className="category-wrapper">
                <div className="header">
                    <div className="section-header-bar"></div>
                    <p>Categories</p>
                </div>
                <h2 className="category-title">Browse By Category</h2>
                <div className="category-grid">
                    {category.map((cat) => (
                        <div
                            key={cat.id}
                            className={`category-card ${"category-card-hover"
                                }`}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <p className="category-name">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Category;
