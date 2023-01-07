import React from "react";
import image from "../assets/image 32.png";
import image2 from "../assets/image2.png";

function BussinesBenefits() {
  return (
    <section
      className="w-full bg-pink-100/80 flex flex-col items-center justify-center text-black"
    >
      <div>
        <h1 className="text-4xl font-bold text-center my-10">
          Bussiness benifit<span className="text-blue-500">.</span>
        </h1>

        <div class="w-full max-w-sm bg-white border shadow-lg shadow-pink-300/80  rounded-lg my-10">
          <div class="flex justify-end px-8 py-4">
            <img src={image} alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center">
        Customer Benefits<span className="text-blue-500">.</span>
        </h1>

        <div class="w-full max-w-sm bg-white border shadow-lg shadow-pink-300/80  rounded-lg my-10">
          <div class="flex justify-end px-8 py-4">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BussinesBenefits;
