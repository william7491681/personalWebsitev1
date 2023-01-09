import React from "react";

export default function Contact() {
    return (
        <div className="h-[565px] pt-24 md:pt-10 text-white" id="Contact">
            <form action="mailto:williamdines@rocketmail.com" method="post"
            encType="text/plain" name="EmailForm" className="mt-[75px] w-[300px] ml-auto mr-auto
             bg-[#848589] rounded-xl">
                <div className="grid grid-rows-3 justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="name" >Full Name:</label>
                        <input type="text" name="name" id="name" className="text-black 
                        px-1" placeholder="Jane Smith"/>
                    </div>
                    <div className="flex flex-col pt-1">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className="text-black ml-auto mr-auto
                        w-[250px] px-1" placeholder="example@email.com"/>
                    </div>
                    <div className="flex flex-col pt-2">
                        <label htmlFor="phone-number">Phone Number:</label>
                        <input type="tel" name="phone-number" id="phone-number" className="text-black px-1"
                        pattern="^[1-9]\d{2}\d{3}\d{4}" placeholder="1234567890"/>
                    </div>
                </div>
                <div className="pt-5 pb-2 flex justify-center">
                    <button type="submit" className="bg-white text-black rounded-md px-1">Submit</button>
                </div>
            </form>
        </div>
    )
}