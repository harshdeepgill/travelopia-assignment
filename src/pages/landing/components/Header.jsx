import { MdMenu } from "react-icons/md";

function Header() {
    return ( 
        <div className="header">
            <div className="header__content">
                <h2><span className="header__content--tee">T</span><span className="header__content--el">L</span></h2>
                <MdMenu style={{fontSize: "3rem"}} />
            </div>
        </div>
     );
}

export default Header;