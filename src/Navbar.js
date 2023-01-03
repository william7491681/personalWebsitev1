import React from "react";
import { NavLink } from "react-router-dom"

export default function Navbar() {
    
    return (
        <div className="">
            <nav>
                <ul className="pl-[60%] h-[40px] flex justify-evenly items-center">
                    <li className="bg-white rounded-md text-lg font-semibold
                    transition duration-300 ease-out hover:bg-gray-300">
                        <NavLink to="/" className={(navData) => navData.isActive ? 
                        "px-2 bg-gray-300 rounded-md" :
                        "px-2"}>Home</NavLink>
                    </li>
                    <li className="bg-white rounded-md text-lg font-semibold
                    transition duration-300 ease-out hover:bg-gray-300">
                        <NavLink to="/About" className={(navData) => navData.isActive ? 
                        "px-2 bg-gray-300 rounded-md" :
                        "px-2"}>About</NavLink>
                    </li>
                    <li className="bg-white rounded-md text-lg font-semibold
                    transition duration-300 ease-out hover:bg-gray-300">
                        <NavLink to="/Contact" className={(navData) => navData.isActive ? 
                        "px-2 bg-gray-300 rounded-md" :
                        "px-2"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}