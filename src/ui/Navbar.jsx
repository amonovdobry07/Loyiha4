import React, { useState } from 'react'
import "../assets/Styles/Navbar.css"
import { LuPhoneCall } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [drop, setDrop] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDrop, setMobileDrop] = useState(false); // NEW

    return (
        <div className='Nav'>
            <div className="nav-container">

                <div className="nav-logo">
                    <h1>Logo</h1>
                </div>

                {/* Desktop links */}
                <div className="nav-links">
                    <ul>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Products</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Contact</li></a>

                        {/* Desktop Dropdown */}
                        <li className='Market'
                            onMouseEnter={() => setDrop(true)}
                            onMouseLeave={() => setDrop(false)}
                        >
                            Market Place &nbsp; ▼
                            {drop && (
                                <ul className='Drop-Nav'>
                                    <li><a href="">Ozon</a></li>
                                    <li><a href="">Wilberries</a></li>
                                    <li><a href="">Yandex Market</a></li>
                                    <li><a href="">Uzum Market</a></li>
                                </ul>
                            )}
                        </li>
                    </ul>

                    <div className="lang_provider">
                        <select>
                            <option value="uz">O'zbek</option>
                            <option value="en">English</option>
                            <option value="ru">Русскый</option>
                        </select>
                    </div>
                </div>

                {/* Bars */}
                <div className="nav-bars">
                    <div className="bars-in">
                        <span>
                            <select name="" id="">
                                <option value="uz">O'zbek</option>
                                <option value="en">English</option>
                                <option value="ru">Русскый</option>
                            </select>
                        </span>
                        <span onClick={() => setMobileOpen(true)}>
                            <FaBarsStaggered />
                        </span>
                    </div>
                </div>


                {/* 📱 MOBILE MENU */}
                <div className={mobileOpen ? "mobile-nav-links active" : "mobile-nav-links"}>
                    <span className="mobile-close" onClick={() => setMobileOpen(false)}>×</span>

                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>

                        {/* ⭐ MOBILE DROPDOWN ⭐ */}
                        <li className="mobile-dropdown" onClick={() => setMobileDrop(!mobileDrop)}>
                            <div className="mobile-dropdown-header">
                                Market Place
                                <span className={mobileDrop ? "arrow rotate" : "arrow"}>▼</span>
                            </div>

                            <div className={mobileDrop ? "mobile-drop-box open" : "mobile-drop-box"}>
                                <a href="">Ozon</a>
                                <a href="">Wilberries</a>
                                <a href="">Yandex Market</a>
                                <a href="">Uzum Market</a>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Navbar
