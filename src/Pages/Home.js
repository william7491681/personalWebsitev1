import React from "react";
// import William from "../William2.jpg"

export default function Home() {

  const [rolesIndex, setRolesIndex] = React.useState(0);

  const roles = ["Software Developer", "Data Analyst", "Web Developer"];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRolesIndex(rolesIndex+1);
    }, 3000);

    return () => clearInterval(interval);
  }, [rolesIndex]);

  let role = roles[rolesIndex % roles.length];
  return (
    <div className="h-[565px] pt-4 md:pt-0 flex flex-col relative" id="Home">
      {/* <h1 className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-white">
        William Dines
      </h1> */}
      <div className="flex text-white justify-center">
        <p className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-[#fefefede] mr-2">William</p>
        <p className="text-4xl md:text-5xl font-bold text-center mt-28 md:mt-14 text-[#ff0000d8]">Dines</p>
      </div>
      <img alt="" className="self-center h-[200px] w-[200px] md:h-[300px] md:w-[300px]
      bg-cover bg-william mt-5" />
      <p className="text-white text-center text-3xl mt-10">
        I am a
      </p>
      <p className="text-[#ff0000d8] font-bold text-center text-3xl">
        {role}
      </p>
    </div>
  )
}