
import { useState } from "react"
import "../assets/Styles/ProductSection.css"
import img1 from "../assets/images/image1.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"
import img4 from "../assets/images/image4.png"
import img5 from "../assets/images/image5.png"
import img6 from "../assets/images/image6.png"
import img7 from "../assets/images/image7.png"
import img8 from "../assets/images/image8.png"
import img9 from "../assets/images/image9.png"

const ProductSection = () => {

    const [visibleCount, setvisibleCount] = useState(3)

    const products = [
        {
            id: 1,
            img: img1,
            title: "Alisher Navoiy",
            size: "70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "30 000 000 so'm",
        },
        {
            id: 2,
            img: img2,
            title: "Abdulla Qodiriy | Jadidlar tarixi",
            size: "85x45 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "20 000 000 so'm",
        },
        {
            id: 3,
            img: img3,
            title: "Amir Temur relefti",
            size: "45x70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "10 000 000 so'm",
        },
        {
            id: 4,
            img: img4,
            title: "Alisher Navoiy",
            size: "70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "30 000 000 so'm",
        },
        {
            id: 5,
            img: img5,
            title: "Abdulla Qodiriy | Jadidlar tarixi",
            size: "85x45 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "20 000 000 so'm",
        },
        {
            id: 6,
            img: img6,
            title: "Amir Temur relefti",
            size: "45x70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "10 000 000 so'm",
        },
        {
            id: 7,
            img: img7,
            title: "Alisher Navoiy",
            size: "70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "30 000 000 so'm",
        },
        {
            id: 8,
            img: img8,
            title: "Abdulla Qodiriy | Jadidlar tarixi",
            size: "85x45 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "20 000 000 so'm",
        },
        {
            id: 9,
            img: img9,
            title: "Amir Temur relefti",
            size: "45x70 sm",
            desc: "Ganj mahsulotidan tayyorlangan",
            price: "10 000 000 so'm",
        },
    ]

    const visibleProducts = products.slice(0, visibleCount)

    const handleShowMore = () => {
        setvisibleCount(prev => Math.min(products.length, prev + 3))
    }

    const handleShowLess = () => {
        setvisibleCount(prev => Math.max(3, prev - 3))
    }

    return (
        <div className="ProductSection">
            <div className="ProductSection-container hh1" data-aos="zoom-in" data-aos-duration="1000">
                <h1>Bizning Maxsulotlar</h1>
            </div>

            <div className="ProductSection-container">
                {visibleProducts.map((item) => (
                    <div className="product-card" key={item.id} data-aos="zoom-in" data-aos-duration="1500">
                        <div className="product-image">
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className="product-content">
                            <h3 className="product-title">{item.title}</h3>
                            <p className="product-size">{item.size}</p>
                            <p className="product-desc">{item.desc}</p>
                            <p className="product-price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ProductSection-container hh1 buttons-row">
                {/* Ko'proq tugmasi faqat yetarli element bo'lmasa ko'rinsin */}
                {visibleCount < products.length && (
                    <button onClick={handleShowMore} className="Koproq">Ko'proq</button>
                )}

                {/* Kamroq tugmasi faqat visibleCount > 3 bo'lsa ko'rinsin */}
                {visibleCount > 3 && (
                    <button onClick={handleShowLess} className="Kamroq">Kamroq</button>
                )}
            </div>
        </div>
    )
}

export default ProductSection; 