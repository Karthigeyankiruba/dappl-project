import React from 'react'
import image1 from '../assets/Rectangle 37.png';
import image2 from '../assets/Rectangle 38.png';
import image3 from '../assets/Rectangle 39.png';
function Products() {
  return (
    <section
    name='products'
     className='w-full h-screen bg-white flex flex-col items-center justify-center text-black text-center p-4'>
        <h1 className="font-bold text-5xl my-10">
        Products to Order<span className="text-blue-400">.</span>
      </h1>
      <p className="text-2xl pt-10">
      Shop here for Dappl's Exclusive Stickers and Tags to secure and manage all your personal belongings
      </p>
      <div className="flex flex-row w-full h-full items-center justify-center">
       <div>
       <img src={image1} alt="" />
       </div>
       <div>
       <img src={image2} alt="" />
       </div>
       <div>
       <img src={image3} alt="" />
       </div>
      </div>
    </section>
  )
}

export default Products