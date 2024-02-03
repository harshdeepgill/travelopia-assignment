import { MdMenu } from "react-icons/md";

function Header({bool}) {
    return ( 
        <div className={`header ${bool && "hero-blur"}`}>
            <div className="header__content">
                <h2 className={`${bool && "hero-blur"}`}><span className="header__content--tee">T</span><span className="header__content--el">L</span></h2>
                <MdMenu style={{fontSize: "3rem"}} />
            </div>
        </div>
     );
}

export default Header;