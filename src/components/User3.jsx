import React from "react";
import card1 from "../assets/Rectangle 89.png";
import card2 from "../assets/Rectangle 90.png";
import card3 from "../assets/Rectangle 91.png";

function User3() {

    const cards = [
        {
            id:1,
            name:'Customizable Questions',
            image:card1,
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat',
        },
        {
            id:2,
            name:'Google Analytics',
            image:card2,
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat',
        },
        {
            id:3,
            name:'24/7 Customer Support',
            image:card3,
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat',
        },
    ]
  return (

    <div className="w-full h-screen flex flex-col items-center justify-center bg-pink-100/80 text-black">
      <div>
        <h1 className="text-4xl font-bold">Why Dappl Review ?</h1>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
       
       {
        cards.map((item) => {
            return(
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
                <div class="h-96 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={item.image}
                    alt=""
                  />
                </div>
                {/* <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
                <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="absolute w-full  text-2xl font-bold text-blue-500 bg-white hover:bg-white/60">
                   {item.name}
                    <p class="w-full h-full mb-3 bg-white/60 text-black  transition-opacity duration-300 group-hover:opacity-100 text-sm font-thin">
                      {item.content}
                    </p>
                  </h1>
                </div>
              </div>
            )
        })
       }
        </div>
      </div>

  );
}

export default User3;
