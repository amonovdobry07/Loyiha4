import "../assets/Styles/ContactSection.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { GrYoutube } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";

const ContactSection = () => {
  const [value, setValue] = useState("+998 (_)-___-__-__");

  const formatPhone = (input) => {
    let numbers = input.replace(/\D/g, "");

    // Doim 998 bilan boshlansin
    if (!numbers.startsWith("998")) {
      numbers = "998" + numbers;
    }

    // Maksimal 12 ta raqam
    numbers = numbers.substring(0, 12);

    let formatted = "+998 ";

    if (numbers.length > 3) {
      formatted += `(${numbers.slice(3, 5)}`;
    }
    if (numbers.length >= 5) {
      formatted += `) ${numbers.slice(5, 8)}`;
    }
    if (numbers.length >= 8) {
      formatted += `-${numbers.slice(8, 10)}`;
    }
    if (numbers.length >= 10) {
      formatted += `-${numbers.slice(10, 12)}`;
    }

    return formatted;
  };

  const handleChange = (e) => {
    setValue(formatPhone(e.target.value));
  };
  return (
    <div className="ContactSection">
      <div className="ContactSection-container">
        {/* Left */}
        <div className="ContactSection-left">
          <h3>Bog'lanish Uchun</h3>
          <h1>Logo</h1>
          <p>
            Biz bilan bog‘lanish uchun quyidagi shakldan foydalaning yoki
            to‘g‘ridan-to‘g‘ri quyidagi aloqa manzillarimiz orqali murojaat
            qiling.
          </p>
          <span
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FaPhoneAlt style={{ color: "red" }} /> +998 (88) 457 68 96
          </span>

          <ul className="ContactSection-nav">
            <a href="">
              <BsTelegram />
            </a>
            <a href="">
              <IoLogoInstagram />
            </a>
            <a href="">
              <GrYoutube />
            </a>
            <a href="">
              <SiWhatsapp />
            </a>
          </ul>

          <form action="">
            <span className="Contact-inputs">
              <input type="text" placeholder="Name" />
              <input
                className="phone-input"
                type="text"
                value={value}
                onChange={handleChange}
                maxLength={19}
                placeholder="+998 (__) ___-__-__"
              />
            </span>
            <button>Yuborish</button>
          </form>
        </div>
        {/* Right */}
        <div className="ContactSection-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5663.219217992143!2d64.43004664921493!3d39.80205761300175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009f09db4376f%3A0xb88c9af1f55ed507!2z0JjQvdGC0LXRgNC90LDRgtC40L7QvdCw0Ls!5e1!3m2!1sru!2s!4v1763440514846!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
