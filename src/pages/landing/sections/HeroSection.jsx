import Button from "../components/Button";
import HeroTitle from "../components/HeroTitle";


function HeroSection() {
    return ( 
        <div className="hero-main">
            <div className="hero-main__image">
            <img 
    srcSet="/resources/small-screen-bg.jpg 480w,
            /resources/medium-screen-bg.jpg 768w, 
            /resources/full-screen-bg.jpg 900w"
    src="" 
    alt="camping near fire mountains travel" 
/>
            </div>
            <div className="hero-main__overlay"></div>
            <div className="hero-main__header">
                <HeroTitle/>
                <Button/>
            </div>
        </div>
     );
}

export default HeroSection;