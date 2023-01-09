import React from "react";
import image from "../assets/footbg.png";
import Logo from "../assets/logo2.png";





function Footer() {
  return (
    <footer
    name='contact'
      style={{ backgroundImage: `url(${image})` }}
      className="w-full h-full text-white p-8 bg-no-repeat bg-cover"
      
    >
         <img className="pt-8 text-3xl" src={Logo} alt="" />
      <p className="py-4">Dappl Applications & Products Private Limited</p>
     
     

     <div className="max-w-7xl mx-auto">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="mb-5 leading-relaxed">
           
            <h1 className="font-bold text-xl">CONTACT US</h1><hr/>
            United Kingdom(UK) <br />
       1200 Thorpe Park, Century Way, Leeds, West Yorkshire, United Kingdom, LS15 8ZA<br/>
       +91 90807 61281<br/>

       <div className="mt-5">
        <h3 className="font-semibold">India</h3>
        Level 8 & 9, Olympia Teknos, No 28, SIDCO Industrial Estate, Guindy, Chennai 600032, Tamil Nadu, India<br/>
        +91 90807 61281<br/>
       </div>
        </div>
       <div className="mb-5"> 
       <h4 className="font-bold text-xl">TRENDING PRODUCTS</h4><hr/>
        <ul className="py-4">
            <li><i class="fa-solid fa-chevron-right"></i> Car Sticker</li>
            <li><i class="fa-solid fa-chevron-right"></i> Bike Sticker</li>
            <li><i class="fa-solid fa-chevron-right"></i> Mobile Sticker</li>
            <li><i class="fa-solid fa-chevron-right"></i> Travel Tag</li>
            <li><i class="fa-solid fa-chevron-right"></i> Laptop Sticker</li>
            <li><i class="fa-solid fa-chevron-right"></i> Passport Sticker</li>
            <li><i class="fa-solid fa-chevron-right"></i> Pet Tag</li>
        </ul>
       </div>
       <div className="mb-5">
       <h4 className="font-bold text-xl">INFORMATION</h4><hr/>
        <ul  className="py-4">
         
            <li><i 
            class="fa-solid fa-chevron-right"></i> FAQ</li>
            <li><i class="fa-solid fa-chevron-right"></i> Privacy Policy</li>
            <li><i class="fa-solid fa-chevron-right"></i> erms & Conditions</li>
            <li><i class="fa-solid fa-chevron-right"></i> Newsletter Contact Us</li>
          
        </ul>
       </div>
       <div className="mb-5">
        <h4 className="text-xl font-semibold pb-2 ">STAY INFORMED</h4><hr/>
        <p>Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
        <form>
            <input
            className="w-full bg-black/30 border-none outline-none px-4 py-2 text-gray-300 text-sm"
             type="email" placeholder="Enter Your Email" />

        </form>
       </div>
      </div>
     </div>


    </footer>
  );
}

export default Footer;
