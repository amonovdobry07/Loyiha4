import React, { useState } from 'react'
import "../assets/Styles/Navbar.css"

import { FaBarsStaggered } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const [drop, setDrop] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDrop, setMobileDrop] = useState(false); // NEW


    const { t, i18n } = useTranslation()

    return (
        <div className='Nav'>
            <div className="nav-container">

                <div className="nav-logo">
                    <h1>Logo</h1>
                </div>

                {/* Desktop links */}
                <div className="nav-links">
                    <ul>
                        <a href="" data-aos="fade-down" data-aos-duration="1000"><li>{t(`BoshSahifa`)}</li></a>
                        <a href="" data-aos="fade-down" data-aos-duration="1200"><li>{t(`Tavarlar`)}</li></a>
                        <a href="" data-aos="fade-down" data-aos-duration="1400"><li>{t(`BizHaqimizda`)}</li></a>
                        <a href="" data-aos="fade-down" data-aos-duration="1600"><li>{t(`Boglanish`)}</li></a>

                        {/* Desktop Dropdown */}
                        <li className='Market'
                            onMouseEnter={() => setDrop(true)}
                            onMouseLeave={() => setDrop(false)}
                            data-aos="fade-down" data-aos-duration="1800"
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

                    <div className="lang_provider" data-aos="fade-down" data-aos-duration="2000">
                        <select
                            onChange={(e) => {
                                i18n.changeLanguage(e.target.value)
                            }}
                            defaultValue="uz"
                        >
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
