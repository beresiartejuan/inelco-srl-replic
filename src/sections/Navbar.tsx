import './../styles/navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

function Navbar() {

    const [stateNavbar, setStateNavbar] = useState(false);

    useEffect(() => {

        if (stateNavbar) document.querySelector(".navbar .links")?.classList.add("active");
        if (!stateNavbar) document.querySelector(".navbar .links")?.classList.remove("active");

    }, [stateNavbar]);

    const handlerNavbarButton = () => {
        setStateNavbar((old_value) => !old_value);
    }

    return (
        <div className="navbar">
            <div>
                <img
                    src="/logo.png"
                ></img>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#about-us">Nosotros</a>
                    </li>
                    <li>
                        <a href="#services">Servicios</a>
                    </li>
                    <li>
                        <a href="#clients">Clientes</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="close" onClick={handlerNavbarButton}>
                <AiOutlineMenu></AiOutlineMenu>
            </div>
        </div>
    )

}

export default Navbar;