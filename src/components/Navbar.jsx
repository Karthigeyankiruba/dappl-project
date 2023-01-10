

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import{ Link} from 'react-scroll'
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link:'home'
    },
    {
      id: 2,
      name: "How It Works",
      link:'works'
    },
    {
      id: 3,
      name: "Sectors",
      link:'sectors'
    },
    {
      id: 4,
      name: "Products",
      link:'products'
    },
    {
      id: 5,
      name: "Subscription",
      link:'subscription'
    },
    {
      id: 6,
      name: "Contact Us",
      link:'contact'
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-[90px] text-white bg-white px-4 fixed z-10 drop-shadow-lg">
      <div>

       <img className="absolute left-0 top-0 p-6"
       src={Logo}
        alt="" />
        
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id ,name}) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize hover:scale-105 duration-200 ${name === 'Home' ? 'text-blue-500 font-bold' : 'text-gray-500 font-medium'} `}
          >
            <Link to={link} smooth duration={500}>{name}</Link>
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
        {links.map(({ link, id ,name}) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6
              text-4xl  ${name === 'Home' ? 'text-blue-500 font-bold' : 'text-gray-500 font-medium'}`}
            >
                          <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{name}</Link>
            </li>
          ))}
         
        </ul>
      )
     }


    
    </div>
  );
};

export default Navbar;




