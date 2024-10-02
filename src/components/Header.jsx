import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const [activeClassName,setactiveClassName]=useState("");

  const setMyActiveClass= useCallback(function (value){
    setactiveClassName(value);
  })
  
  
  


  return (
    <div className="p-[1rem] flex justify-between items-center w-full fixed z-[99999]  backdrop-blur-lg gap-5">
      <div className="md:ml-[3rem]">
        <Link onClick={()=>{setactiveClassName("")}} to="/">
          {" "}
          <img src="myLogo.png" alt="" className={`w-12 cursor-pointer`} />
        </Link>
      </div>
      <div className=" w-[12rem] sm:w-[17rem] md:mr-[3rem]">
        <ul className="flex list-none justify-between text-[1rem]">
          <Link to="/about">
            <li onClick={(e)=>{setMyActiveClass(e.target.innerText)}} className= {(activeClassName==="About"?"text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>
              About
            </li>
          </Link  >
          <Link to="/Project">
          <li onClick={(e)=>{setMyActiveClass(e.target.innerText)}} className= {(activeClassName==="Project"?"text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>
            Project
          </li>
          </Link>
          <Link to="/Blog">
          <li onClick={(e)=>{setMyActiveClass(e.target.innerText)}} className= {(activeClassName==="Blog" ?"text-white font-bold cursor-pointer":" text-[#6c6d6e] font-bold cursor-pointer")}>
            Blog
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
