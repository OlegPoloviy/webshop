import  { useState } from "react";
import "../styles/Dropdown.scss";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                Discovery
                <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Smartphones</a>
                    <a href="#">Laptops</a>
                    <a href="#">Home electronics</a>
                </div>
            )}
        </div>
    );
};

