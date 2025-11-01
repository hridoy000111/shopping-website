import React from 'react';
import { Typewriter } from "react-simple-typewriter";



const Hero = () => {
  
    return (
        <div className='relative w-full h-[40vh] md:h-[80vh]  overflow-hidden px-3 '>
            <img className='w-full  h-[40vh] md:h-[80vh] object-cover ' src="/public/main.png.jpg" alt=""  />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h2 className="text-xl md:text-4xl font-bold drop-shadow-lg mt-3">
                     <Typewriter
                      words={["Welcome To Shopping Website"]}
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      delaySpeed={2000}
                      deleteSpeed={70}
                     />
                </h2>
                  <p className="mt-3 text-lg lg:text-2xl drop-shadow-md">
          Find your favorite products easily!
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition">
          Shop Now
        </button>
            </div>
           
        </div>
        
    );
};

export default Hero;