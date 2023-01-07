import React from "react";
import Vector from "../assets/Vector 16.png";
import phone from "../assets/1-01.png";
function Review() {
  return (
    <div
      style={{ backgroundImage: `url(${Vector})` }}
      name="review"
      className="w-full h-full text-black"
    >
      <div className="flex flex-col items-center justify-center p-20">
        <div className="mt-20">
          <h1 className="font-bold text-4xl">How Dappl Review Works</h1>
        </div>
        <div className="flex flex-row justify-end mt-20">
          <div className="w-1/2">
            <img src={phone} alt="" />
          </div>
          <div className="w1/2 text-end">
            <h1 className="font-black text-9xl text-gray-300">01</h1>
            <h1 className="text-4xl font-bold my-10">Scan Our QR code</h1>
            <p>
            Shop here for Dappl's Exclusive Stickers and Tags to secure and manage all your personal belongings
            </p>
          </div>
        </div>


        <div className="flex flex-row justify-evenly  mt-20">
         
          <div className="w1/2 text-start">
            <h1 className="font-black text-9xl text-gray-300">02</h1>
            <h1 className="text-4xl font-bold my-10">Access review form</h1>
            <p>
            Shop here for Dappl's Exclusive Stickers and Tags to secure and manage all your personal belongings
            </p>
          </div>
          <div className="w-1/2 pl-[30px]">
            <img src={phone} alt="" />
          </div>
        </div>


        <div className="flex flex-row justify-end mt-20">
          <div className="w-1/2">
            <img src={phone} alt="" />
          </div>
          <div className="w1/2 text-end">
            <h1 className="font-black text-9xl text-gray-300">03</h1>
            <h1 className="text-4xl font-bold my-10">Customer Can drop thier opinion</h1>
            <p>
            Shop here for Dappl's Exclusive Stickers and Tags to secure and manage all your personal belongings
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Review;
