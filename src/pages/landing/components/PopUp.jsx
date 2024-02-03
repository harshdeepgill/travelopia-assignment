import { BsCheckCircle } from "react-icons/bs";
import Button from "./Button";

function PopUp({dismiser}) {
    return ( 
        <div className="popup">
            <div className="popup__modal">
                <BsCheckCircle className="popup__modal__icon" />
                <p className="popup__modal__text">Hello World!</p>
                <Button func={dismiser} blue={true} text={"Ok"}/>
            </div>
        </div>
     );
}

export default PopUp;