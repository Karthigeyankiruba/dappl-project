import React from "react";
import image from "../assets/image 32.png";
import image2 from "../assets/image2.png";

function BussinesBenefits() {
  return (
    <section className="w-full bg-pink-100/80 flex flex-col items-center justify-center text-black">
      <div>
        <h1 className="text-4xl font-bold text-center my-10">
          Bussiness benifit<span className="text-blue-500">.</span>
        </h1>


        <div class=" max-w-[708.3px] h-[456.25px] bg-white border shadow-lg shadow-pink-300/80  rounded-lg my-10 group hover:translate-x-1/4 duration-300 relative">
          <div className="m-10">
            <ul className="opacity-0 group-hover:visible group-hover:opacity-100 text-black p-10 pl-20 list-disc text-xl">
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
            </ul>
          </div>

          <div class="px-8 py-4">
            <img
              className="group-hover:-translate-x-full duration-300 absolute top-10 right-20"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center my-10">
        Customer Benefits<span className="text-blue-500">.</span>
        </h1>

        <div class=" max-w-[708.3px] h-[456.25px] bg-white border shadow-lg shadow-pink-300/80  rounded-lg my-10 group hover:-translate-x-1/4 duration-300 relative">
          <div className="m-10">
            <ul className="opacity-0 group-hover:visible group-hover:opacity-100 text-black p-10 pl-20 list-disc text-xl">
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
              <li className="pb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sint.
              </li>
            </ul>
          </div>

          <div class="px-8 py-4">
            <img
              className="group-hover:translate-x-full duration-300 absolute top-10 right-20"
              src={image2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BussinesBenefits;
