
import "../assets/Styles/HeroSection.css"
import video from "../assets/Videos/00705681-e488-4be8-9954-2e34cea9b053.mp4"

const HeroSection = () => {
    return (
        <>
            <div className="HeroSection">
                <div className="HereSection-Back">
                    <video src={video}
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
            </div>
            <div className="Hero-overlar">

            </div>
        </>
    )
}

export default HeroSection; 