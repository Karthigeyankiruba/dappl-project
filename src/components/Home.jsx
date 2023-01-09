import React from "react";
import bg from "../assets/background.jpg";

function Home() {
  return (
    <main
    name='home'
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-full text-white bg-no-repeat bg-cover md:bg-right"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black">
            Share Your <font className="text-white">Reviews </font> Expect The
            Unexpected <font className="text-white">Prices</font>
          </h2>
          <p className="text-gray-600 text-2xl  py-4 max-w-md">
            Drop Your Reviews Here and Win Amazing Amazon Vouchers From{" "}
            <font className="text-blue-500 font-bold">Dappl</font>
          </p>

          <div>
            <button
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center  bg-sky-500
            cursor-pointer font-bold"
            >
              Share Reviews
            </button>
          </div>
        </div>
    
      </div>
    </main>
  );
}

export default Home;
