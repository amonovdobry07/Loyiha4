
import "../assets/Styles/AboutSection.css"
import small1 from "../assets/images/Без названия.jpg"
import small2 from "../assets/images/Без названия (1).jpg"
import img3 from "../assets/images/Без названия (2).jpg"
import bigPhoto from "../assets/images/Без названия (3).jpg";


const AboutSection = () => {
    return (
        <section className="about-wrapper">
            <div className="about-container">

                {/* LEFT SECTION */}
                <div className="about-left">
                    <div className="story-title">
                        <span className="red-line"></span> Biz Haqimizda
                    </div>

                    <h1 className="main-title">
                        Faoliyat Turi dasturchilik Kadr Yetishtirish <br />
                        <span>Dasturchi Tayyorlash</span>
                    </h1>

                    {/* Small Preview Images */}
                    <div className="preview-boxes">
                        <div className="preview-card">
                            <img
                                src={bigPhoto}
                                alt=""
                            />
                            <div className="tag left">Tech Blog</div>
                            <div className="tag right">Trends</div>
                        </div>

                        <div className="preview-card">
                            <img
                                src={small2}
                                alt=""
                            />
                            <div className="tag left">Tech Blog</div>
                            <div className="tag right">Trends</div>
                        </div>
                    </div>

                    <p className="about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione similique quas molestias. Officiis incidunt aspernatur laudantium aperiam maxime, officia quo facere quibusdam ad id a voluptatem itaque similique sapiente.
                    </p>

                    {/* STATS */}
                    <div className="stats-row">
                        <div className="qator">
                            <div className="stat-item">
                                <h2>10k+</h2>
                                <p>Completed Projects</p>
                            </div>

                            <div className="stat-item">
                                <h2>15k</h2>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>

                        <div className="qator">
                            <div className="stat-item">
                                <h2>10k+</h2>
                                <p>Years Of Mastery</p>
                            </div>

                            <div className="stat-item">
                                <h2>45+</h2>
                                <p>Worldwide Honors</p>
                            </div>
                        </div>
                    </div>

                    {/* WATCH INTRO */}
                </div>

                {/* RIGHT IMAGE */}
                <div className="about-right">
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