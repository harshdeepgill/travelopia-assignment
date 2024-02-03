

function Button({text, blue, white, func}) {
    return ( 
        <div >
            <a onClick={func} className={`button ${blue && "button-blue"} ${white && "button-white"}`} href="#">{text}</a>
        </div>
     );
}

export default Button;