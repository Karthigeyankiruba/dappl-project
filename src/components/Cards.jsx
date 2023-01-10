import React from "react";
import user from "../assets/user1.png";
import user3 from "../assets/Ellipse 22.png";
import user2 from "../assets/Ellipse 21.png";
import user4 from "../assets/Ellipse 23.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRaf, useWindowSize } from "react-use";

function Cards() {
  const { width } = useWindowSize();
  const perPage = width < 576 ? 1 : width <= 768 ? 2 : width <= 1024 ? 3 : 4;
  const cards = [
    {
      id: 1,
      img: user,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 2,
      img: user2,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 3,
      img: user3,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 4,
      img: user4,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 5,
      img: user,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 6,
      img: user2,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 7,
      img: user3,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 8,
      img: user4,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
    {
      id: 9,
      img: user,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro placeat exercitationem eum molestiae nam quo ipsum eaque dicta minus",
    },
  ];
  return (
    <div className="w-full h-full bg-[#244763] mx-auto flex justify-center items-center sm:flex-row p-6 m-0">
      <Splide
        options={{
          perPage,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "",
        }}
        key={cards.id}
      >
        {cards.map((card) => {
          return (
            <SplideSlide key={card.id}>
              <div className="max-w-[264px] min-h-[153px] mx-auto bg-white rounded-lg shadow-md relative my-8 text-left">

                  <img
                    className="-left-[20px] -top-[30px] absolute"
                    src={card.img}
                    alt="profile"
                  />

                <p className="pl-10 pt-8 p-2 text-black text-[14px]">
                  {card.content}
                </p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>


  );
}

export default Cards;
