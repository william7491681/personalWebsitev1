import React from "react";
// import William from "../William2.jpg"

export default function Home() {
  return (
    <div className="h-[800px] pt-4 md:pt-0 flex flex-col relative" id="Home">
      {/* <h1 className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-white">
        William Dines
      </h1> */}
      <div className="flex text-white justify-center">
        <p className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-white mr-2">William</p>
        <p className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-[#ff0000]">Dines</p>
      </div>
      <img alt="" className="self-center h-[200px] w-[200px] md:h-[300px] md:w-[300px]
      bg-cover bg-william mt-5" />
    </div>
  )
}