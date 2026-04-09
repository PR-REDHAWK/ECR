import React from 'react';

// Import all 6 images
import img1 from '../assets/images/sp.webp';
import img2 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.24 PM (1).jpeg';
import img3 from '../assets/images/speakers.jpg.jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.37 PM.jpeg';
import img5 from '../assets/images/batteries (1).png';
import img6 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.27 PM (1).jpeg';

export default function DeviceGridSection() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="relative w-full flex flex-col py-10 px-4 sm:px-8 md:px-12 z-10 text-black">
      
      {/* 1. HEADER */}
      <div className="w-full bg-white/20 backdrop-blur-md rounded-[2rem] border border-white/40 shadow-sm p-6 md:p-12 lg:p-16 mb-12">
        <div className="flex flex-col tracking-[-0.05em]">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.8] mb-2 drop-shadow-sm">EXPLORE</h2>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#134989] leading-[0.8] mb-2 drop-shadow-sm ml-[15%] sm:ml-[25%]">YOUR</h2>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.8] drop-shadow-sm ml-[35%] sm:ml-[60%]">DEVICE</h2>
        </div>
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* 3. IMAGE CARDS */}
        {images.map((imgSrc, index) => (
          <div 
            key={index} 
            className="w-full bg-white/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/50 rounded-[2rem] p-4 lg:p-6 h-[50vh] sm:h-[45vh] lg:h-[450px]"
          >
            <img 
              src={imgSrc} 
              alt={`Device Component ${index + 1}`} 
              className="w-full h-full object-cover rounded-xl shadow-inner transition-transform hover:scale-[1.02] duration-500" 
            />
          </div>
        ))}

      </div>

    </section>
  );
}
