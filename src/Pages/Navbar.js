import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Navbar() {
    
    const [activeLink, setActiveLink] = React.useState("Home");

    const scroller = (el) => {
        const str = el.target.innerText
        const element = document.getElementById(str)
        setActiveLink(str)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <nav className="fixed bg-[#8C92AC] flex flex-col md:flex-row md:justify-between w-full">
            <ul className="h-[40px] flex justify-center md:justify-start items-center">
                <li className="text-cyan-100 rounded-md text-lg font-semibold
                transition duration-300 ease-out hover:text-cyan-400 mx-4">
                    <button onClick={scroller} className={activeLink.localeCompare("Home")===0 ? 
                "text-cyan-400" :
                ""}>
                        Home
                    </button>
                </li>
                <li className="text-cyan-100 rounded-md text-lg font-semibold
                transition duration-300 ease-out hover:text-cyan-400 mx-4">
                    <button onClick={scroller} className={activeLink.localeCompare("About")===0 ? 
                "text-cyan-400" :
                ""}>
                        About
                    </button>
                </li>
                <li className="text-cyan-100 rounded-md text-lg font-semibold
                transition duration-300 ease-out hover:text-cyan-400 mx-4">
                    <button onClick={scroller} className={activeLink.localeCompare("Contact")===0 ? 
                "text-cyan-400" :
                ""}>
                        Contact
                    </button>
                </li>
            </ul>
            <ul className="h-[40px] flex justify-center md:justify-end mt-5 md:mt-0 items-center">
                <a href="http://github.com/william7491681" target="_blank" rel="noopener noreferrer">
                    <BsGithub className="mr-7" size={30} />
                </a>
                <a href="http://linkedin.com/in/william-dines" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="mr-7" size={30} />
                </a>
            </ul>
        </nav>
    )
}