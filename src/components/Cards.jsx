import React from "react";
import user from "../assets/user1.png";
import user3 from "../assets/Ellipse 22.png";
import user2 from "../assets/Ellipse 21.png";
import user4 from "../assets/Ellipse 23.png";

function Cards() {
  return (
    <div className="w-full h-full bg-[#244763] mx-auto flex flex-col justify-center sm:flex-row p-8 gap-10">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md relative">
        <img className="-left-5 -top-5 absolute" src={user} alt="" />
        <p className="pl-8 pt-8 text-black text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro
          placeat, exercitationem eum molestiae nam quo ipsum eaque dicta minus?
        </p>
      </div>


      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md relative">
        <img className="-left-5 -top-5 absolute" src={user2} alt="" />
        <p className="pl-8 pt-8 text-black text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro
          placeat, exercitationem eum molestiae nam quo ipsum eaque dicta minus?
        </p>
      </div>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md relative">
        <img className="-left-5 -top-5 absolute" src={user3} alt="" />
        <p className="pl-8 pt-8 text-black text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro
          placeat, exercitationem eum molestiae nam quo ipsum eaque dicta minus?
        </p>
      </div>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md relative">
        <img className="-left-5 -top-5 absolute" src={user4} alt="" />
        <p className="pl-8 pt-8 text-black text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro
          placeat, exercitationem eum molestiae nam quo ipsum eaque dicta minus?
        </p>
      </div>
    </div>
  );
}

export default Cards;
