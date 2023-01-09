import React from "react";

export default function About() {
    return (
        <div className="h-[565px] pt-24 md:pt-10 text-gray-200" id="About">
            <div className="w-[600px] ml-auto mr-auto font-serif">
                <p className="text-center pt-[75px] text-3xl font-medium">
                    I am a new graduate from<br />
                    <span className="bg-gradient-to-tl 
                    from-[#461d7c] to-[#FDD023] text-transparent bg-clip-text
                    animate-colorGradient">Louisiana State University</span>
                    &nbsp;that has a passion for software development.
                    <br /> <br />
                    More things here
                </p>
            </div>
        </div>
    )
}