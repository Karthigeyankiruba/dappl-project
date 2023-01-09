import React from 'react'
import image from '../assets/Rectangle 64.png'

function Testimonial() {
  return (
    <section className="w-full h-full bg-pink-200/80 flex flex-col items-center justify-center text-black p-8">
     <h1 className="font-bold text-3xl sm:text-5xl my-10">
        Testimonials<span className="text-blue-400">.</span>
      </h1>
      <div>
        <img src={image} alt="" />
      </div>
    </section>
  )
}

export default Testimonial