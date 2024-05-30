import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import backgroundVideo from '../assets/background2.mp4';

export default function Hero() {
  useEffect(() => {
    AOS.init(); 
  }, []); 

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay playsInline loop muted className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="400" 
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white z-10 text-center px-4 sm:px-8 lg:px-0">
          Atlas des Artisans
        </h1>
        <button
          className="text-white py-2 px-4  shadow-lg hover:bg-[#7B513D] transition duration-300 border border-gray-200 rounded-md" data-aos="fade-up"
          data-aos-delay="700" 
        >
          Your Button Text
        </button>
      </div>
    </div>
  );
}