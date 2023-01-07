import React from "react";
import card1 from "../assets/Rectangle 89.png";

function User2() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-pink-100/80 text-black">
      <div>
        <h1 className="text-4xl font-bold">Why Dappl Review ?</h1>
      </div>

      <div className="flex flex-col w-full sm:flex-row text-black gap-3  px-6 py-10 text-center">
        {/* <div class="max-w-sm w1/3 bg-white rounded">
                <img 
                src={card1} alt="" />
                <div>
                    <h2></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi suscipit ratione voluptates molestiae, doloribus veniam magni minus maxime nisi saepe vitae! Voluptatum blanditiis adipisci voluptatem minima corporis quas dolore?</p>
                </div>
            </div> */}

        <div className="flex items-center justify-center">
          <div className="bg-white p-0 rounded-xl">
            <img
              src={card1}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button
              
                target="_blank"
                rel="noreferrer"
                className="w-1/2 text-xl font-bold m-4 duration-200 hover:scale-105 text-center text-blue-500"
              >
                Customizable Questions
              </button>
            </div>
          </div>
        </div>





      </div>
    </section>
  );
}

export default User2;
