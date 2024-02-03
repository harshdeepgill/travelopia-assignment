import { useState } from "react";
import Button from "../components/Button";
import HeroTitle from "../components/HeroTitle";
import PopUp from "../components/PopUp";
import Footer from "../components/Footer";
import Header from "../components/Header";


function HeroSection() {

    const [popupState, setPopupState] = useState(false);

    const dismiser = () => {
        setPopupState(false);
    }

    const invoker = () => {
        setPopupState(true);
    }


    return ( 
        <div className="hero-main">
            <Header/>
            <div className={`hero-main__image ${popupState && "hero-blur"}`}>
                <img
                    srcSet="/resources/small-screen-bg-comp.jpg 480w,
            /resources/medium-screen-bg-comp.jpg 768w, 
            /resources/full-screen-bg-comp.jpg 900w"
                    src="/resources/full-screen-bg-comp.jpg"
                    alt="camping near fire mountains travel"
                />
            </div>
            <div className="hero-main__overlay"></div>
            <div className={`hero-main__header ${popupState && "hero-blur"}`}>
                <HeroTitle/>
                <Button func={invoker} white={true} text={"Click Me!"}/>
            </div>
            {popupState && 
            <div className="hero-main__popup">
                <PopUp dismiser={dismiser}/>
            </div>
            }
            <Footer/>
            
        </div>
     );
}

export default HeroSection;