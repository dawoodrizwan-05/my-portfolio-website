"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="bg-gray-700 text-white">
      <div className="flex justify-between items-center">
        <h1 className= "font-autograph m-7 ">Dawood</h1>
        <ul className=" m-7 md:flex hidden">
          <a className="cursor-pointer" href="#home">
            <li className="mx-5 text-1.15xl   hover:scale-125 duration-500">
              Home
            </li>
          </a>
          <a className="cursor-pointer" href="#about">
            <li className="mx-5 text-1.15xl hover:scale-125 duration-500">
              About
            </li>
          </a>

          <a className="cursor-pointer" href="#blogs">
          <li className="mx-5 text-1.15xl   hover:scale-125 duration-500">
            Blogs
          </li>
            </a>

          <a className="cursor-pointer" href="#portfolio">
          <li className="mx-5 text-1.15xl  hover:scale-125 duration-500">
            Portfolio
          </li>
            </a>
            <a className="cursor-pointer" href="#skills"> 
          <li className="mx-5 text-1.15xl  hover:scale-125 duration-500">
            Skills
          </li>
            </a>
            <a className="cursor-pointer" href="#contact">
          <li className="mx-5 text-1.15xl  hover:scale-125 duration-500">
            Contact
          </li>
            </a>
        </ul>
        <div className="flex justify-between items-center  mr-6 ml-3 mt-2">
  <a href="/path/to/your/cv.pdf" download className="bg-blue-500 text-white font-bold py-2 px-2 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white">
    Download CV
  </a>
</div>

        <div
          className="pr-5 md:hidden z-10"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <div className="fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center justify-center">
            <ul className=" m-7  text-white   ">
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Home</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">About</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Blogs</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Portfolio</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Skills</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Contact</li>
              
            
              
            </ul>
          </div>
        )}
        {/* overlay ends here */}
      </div>
    </section>
  );
};
