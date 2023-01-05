import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import background from "./subtle-prism.svg"

export default function Layout() {

    return (
        <div >
            {/* <img src={background} alt="background" className="bg-cover bg-center"/> */}
            <Navbar />
            <Home />
            <About />
            <Contact />
        </div>
    )
}