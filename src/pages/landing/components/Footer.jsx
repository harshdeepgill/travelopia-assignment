function Footer({bool}) {
    return ( 
        <div className={`footer ${bool && "hero-blur"}`} >
            <div className="footer__content">
                <p>Harshdeep Gill</p>
                <p>&copy; 2024</p>
                <p>er.harshdeepgill@gmail.com</p>
            </div>
        </div>
     );
}

export default Footer;