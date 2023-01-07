

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import{ Link} from 'react-scroll'
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "How It Works",
    },
    {
      id: 3,
      link: "Sectors",
    },
    {
      id: 4,
      link: "Products",
    },
    {
      id: 5,
      link: "Subscription",
    },
    {
      id: 6,
      link: "Contact Us",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-[90px] text-white bg-white px-4 fixed">
      <div>
       {/* <h1 className="text-5xl font-signature ml-2">Karthick</h1> */}
       <img className="absolute left-0 top-0 p-6"
       src={Logo}
        alt="" />
        
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
     
     {
      nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-gray-500">
         <li></li>
        {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6
              text-4xl"
            >
                          <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
         
        </ul>
      )
     }


    
    </div>
  );
};

export default Navbar;