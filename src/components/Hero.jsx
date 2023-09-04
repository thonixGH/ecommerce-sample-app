import React from "react";
// import images
import WomanImg from '../img/background.jpg'
// import Link
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-b from-slate-500 to-sky-700 h-[600px] w-full  relative">
      <img className="w-full h-full object-cover mix-blend-overlay absolute" src={WomanImg}alt="" />
      <div className="p-24 ">
        {/* pretitle */}
      <div className="font-semibold flex items-center  uppercase text-[30px] text-white ">
       <div className="w-12 h-[2px] bg-red-500 mr-1"></div> New Trend
      </div>
         {/* title */}
     <h1
       className="text-[70px] leading-[1.1] font-light 
     mb-4 text-sky-500 "
     >
       JANE SALE STYLISH <br />
       <span className="font-semibold">BOUTIQUE</span>
     </h1>
      </div>
    </section>
   
  );
};
export default Hero;
