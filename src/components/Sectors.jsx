import React from "react";
import Img from "../assets/Rectangle 43.png";
import Img2 from "../assets/Rectangle 44.png";
import Img3 from "../assets/Rectangle 49.png";
import Img4 from "../assets/Rectangle 52.png";
import Img5 from "../assets/Rectangle 55.png";
import Img6 from "../assets/Rectangle 44.png";
import Img7 from "../assets/Rectangle 47.png";
import Img8 from "../assets/Rectangle 50.png";
import Img9 from "../assets/Rectangle 53.png";
import Img10 from "../assets/Rectangle 56.png";
import Img11 from "../assets/Rectangle 45.png";
import Img12 from "../assets/Rectangle 48.png";
import Img13 from "../assets/Rectangle 51.png";
import Img14 from "../assets/Rectangle 54.png";
import Img15 from "../assets/Rectangle 57.png";

function Sectors() {
  const sectors = [
    {
      id: 1,
      name: "Restaurants",
      image: Img,
    },
    {
      id: 2,
      name: "Hospitality",
      image: Img2,
    },
    {
      id: 3,
      name: "Travel Services",
      image: Img3,
    },
    {
      id: 4,
      name: "E-Commerce",
      image: Img4,
    },
    {
      id: 5,
      name: "Retail Store",
      image: Img5,
    },
    {
      id: 6,
      name: "Consumer Products",
      image: Img6,
    },
    {
      id: 7,
      name: "Pharmacy",
      image: Img7,
    },
    {
      id: 8,
      name: "Super Markets",
      image: Img8,
    },
    {
      id: 9,
      name: "Kirana Stores",
      image: Img9,
    },
    {
      id: 10,
      name: "Travel Services",
      image: Img10,
    },
    {
      id: 11,
      name: "Edu-Institutions",
      image: Img11,
    },
    {
      id: 12,
      name: "Apartment",
      image: Img12,
    },
    {
      id: 13,
      name: "Vehicle services",
      image: Img13,
    },
    {
      id: 14,
      name: "Gadget Services",
      image: Img14,
    },
    {
      id: 15,
      name: "Hospitals",
      image: Img15,
    },
  ];
  return (
    <section
      name="sectors"
      className="w-full  bg-[#244763] flex flex-col items-center justify-center text-white text-center p-4"
    >
      <h1 className="font-bold text-5xl my-10">
        Sectors We Cater<span className="text-blue-400">.</span>
      </h1>
      <p className="text-2xl pt-10">
        Shop here for Dappl's Exclusive Stickers and Tags to secure and manage
        all your personal belongings
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full h-full items-center justify-center">
        {sectors.map((item, id) => {
          return (
            <div
              class="max-w-sm bg-white border border-gray-200 rounded-lg p-2 text-gray-600 text-center my-10"
              key={id}
            >
              <img class="rounded-t-lg" src={item.image} alt="" />

              <div class="p-1">
                <h5>{item.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sectors;
