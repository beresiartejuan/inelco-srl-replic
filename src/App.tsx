import Navbar from "./sections/Navbar";
import { BsArrowBarDown } from "react-icons/bs";

import "./styles/app.css";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";

import { useEffect } from "react";

function App() {

    /** NOTE: Terminar esta funcionalidad 
    useEffect(() => {

        const clickDownEvent = () => {
            alert("Intenta hacer el scroll!");
        }

        document.querySelector(".down")?.addEventListener("click", clickDownEvent);

        return () => {
            document.querySelector(".down")?.removeEventListener("click", clickDownEvent);
        }

    });*/

    return (
        <>
            <Navbar></Navbar>
            <header>
                <span>Calidad en Ingeniería, Automatización y montajes</span>
                <span className="down"><BsArrowBarDown></BsArrowBarDown></span>
            </header>
            <AboutUs></AboutUs>
            <Services></Services>
        </>
    )
}

export default App
