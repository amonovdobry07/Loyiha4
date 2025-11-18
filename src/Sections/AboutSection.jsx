
import "../assets/Styles/AboutSection.css"
import small1 from "../assets/images/Без названия.jpg"
import small2 from "../assets/images/Без названия (1).jpg"
import img3 from "../assets/images/Без названия (2).jpg"
import bigPhoto from "../assets/images/Без названия (3).jpg";
import { useTranslation } from "react-i18next";




const AboutSection = () => {
    const { t, i18n } = useTranslation()
    return (
        <section className="about-wrapper">
            <div className="about-container">

                {/* LEFT SECTION */}
                <div className="about-left" data-aos="fade-down-right" data-aos-duration="1500">
                    <div className="story-title">
                        <span className="red-line"></span> {t(`BizHaqimizda2`)}
                    </div>

                    <h1 className="main-title">
                        {t(`FaoliyatTuri`)} <br />
                        <span>{t(`Dasturchi`)}</span>
                    </h1>

                    {/* Small Preview Images */}
                    <div className="preview-boxes">
                        <div className="preview-card">
                            <img
                                src={bigPhoto}
                                alt=""
                            />
                            <div className="tag left">{t(`Tech`)}</div>
                            <div className="tag right">{t(`Trends`)}</div>
                        </div>

                        <div className="preview-card">
                            <img
                                src={small2}
                                alt=""
                            />
                            <div className="tag left">{t(`Tech`)}</div>
                            <div className="tag right">{t(`Trends`)}</div>
                        </div>
                    </div>

                    <p className="about-text">
                        {t(`About`)}
                    </p>

                    {/* STATS */}
                    <div className="stats-row">
                        <div className="qator">
                            <div className="stat-item">
                                <h2>10k+</h2>
                                <p>{t(`Loyihalar`)}</p>
                            </div>

                            <div className="stat-item">
                                <h2>15k</h2>
                                <p>{t(`Mijozlar`)}</p>
                            </div>
                        </div>

                        <div className="qator">
                            <div className="stat-item">
                                <h2>10k+</h2>
                                <p>{t(`Tajriba`)}</p>
                            </div>

                            <div className="stat-item">
                                <h2>45+</h2>
                                <p>{t(`MukammalLoyihalar`)}</p>
                            </div>
                        </div>
                    </div>

                    {/* WATCH INTRO */}
                </div>

                {/* RIGHT IMAGE */}
                <div className="about-right" data-aos="fade-down-left" data-aos-duration="1500" >
                    <img
                        src="https://images.unsplash.com/photo-1560264418-c4445382edbc"
                        alt="Team Work"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;