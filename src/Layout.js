import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import bg from "./subtle-prism.svg"

export default function Layout() {

    const bg2 = {backgroundColor: "5f429f", backgroundImage: `url(${bg})`, backgroundSize: "cover"};
    return (
        <div style={bg2}>
            <Navbar />
            <Home />
            <About />
            <Contact />
        </div>
    )
}