import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  const [isWidth377, setIsWidth377] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 377px)");

    const handleChange = (e) => {
      setIsWidth377(e.matches);
    };

    // Check on initial load
    setIsWidth377(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  
  return (
    <div className="p-[1rem] flex justify-between items-center w-full fixed z-[99999]  backdrop-blur-lg gap-5">
      <div className="md:ml-[3rem] hide-on-377">
        <Link to="/">
          {" "}
          <img src="myLogo.png" alt="" className={`w-12 cursor-pointer`} />
        </Link>
      </div>
      <div className="sm:w-[17rem] md:mr-[3rem]">
        <ul className="flex list-none justify-between text-[1rem] gap-[1rem] flex-wrap">
            
            {isWidth377 && <NavLink to={"/"} className={({isActive})=>(isActive ? "text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>Home</NavLink>}
            <NavLink to={"/about"} className={({isActive})=>(isActive ? "text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>About</NavLink>
            <NavLink to={"/project"} className={({isActive})=>(isActive ? "text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>Project</NavLink>
            <NavLink to={"/playground"} className={({isActive})=>(isActive ? "text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>Playground</NavLink>
            <NavLink to={"/blog"} className={({isActive})=>(isActive ? "text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>Blog</NavLink>

        </ul>
      </div>
    </div>
  );
};

export default Header;
