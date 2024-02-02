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
    sizes="1200px,
            (min-width: 480px) 480px,
            (min-width: 768px) 768px,
            (min-width: 900px) 900px"
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