import React from "react";

export default function About() {
    return (
        <div className="h-[565px] pt-24 md:pt-10 text-gray-200" id="About">
            <div className="w-9/12 ml-auto mr-auto font-serif">
                <p className="text-center pt-[75px] text-xl md:text-3xl font-medium">
                    I recently graduated from<br />
                    <span className="bg-gradient-to-tl 
                    from-[#461d7c] to-[#FDD023] text-transparent bg-clip-text
                    animate-colorGradient">Louisiana State University</span>
                    , majoring in computer science with a minor in business administration.
                    <br /><br /><br />
                    I'm currently searching for a full time position as a junior software
                    developer
                    <br /><br /><br />
                    I'm based out of the New Orleans area, but I am open to remote work
                </p>
            </div>
        </div>
    )
}