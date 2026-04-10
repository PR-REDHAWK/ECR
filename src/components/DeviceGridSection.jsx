import React from 'react';

// Import all 6 images
import img1 from '../assets/images/sp.webp';
import img2 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.24 PM (1).jpeg';
import img3 from '../assets/images/speakers.jpg.jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.37 PM.jpeg';
import img5 from '../assets/images/batteries (1).png';
import img6 from '../assets/images/WhatsApp Image 2026-04-08 at 12.19.27 PM (1).jpeg';

export default function DeviceGridSection() {
  const devices = [
    {
      src: img1,
      title: "Solar Plates",
      description: "High-efficiency solar plates for continuous off-grid power"
    },
    {
      src: img2,
      title: "AC Cooling",
      description: "Keeps your environment cool even in extreme heat"
    },
    {
      src: img3,
      title: "Immersive Audio",
      description: "Premium built-in speakers for crystal clear sound"
    },
    {
      src: img4,
      title: "Ambient Lighting",
      description: "Adjustable bright lighting for every mood and time of day"
    },
    {
      src: img5,
      title: "High-Capacity Battery",
      description: "Long-lasting battery backups to power you through the night"
    },
    {
      src: img6,
      title: "Smart Controls",
      description: "Intuitive interface for seamless control of all features"
    }
  ];

  return (
    <section id="device" className="relative w-full flex flex-col py-10 px-4 sm:px-8 md:px-12 z-10 text-black">
      
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
        {devices.map((device, index) => (
          <div 
            key={index} 
            className="w-full bg-white/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/50 rounded-[2rem] p-4 lg:p-6 h-[50vh] sm:h-[45vh] lg:h-[450px]"
          >
            <div 
              className="relative w-full h-full group overflow-hidden rounded-xl shadow-inner focus:outline-none"
              tabIndex="0"
            >
              <img 
                src={device.src} 
                alt={device.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-6 lg:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 ease-out">
                  <h3 className="text-white font-extrabold text-2xl lg:text-3xl mb-3 tracking-wide drop-shadow-md">
                    {device.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-sm drop-shadow-sm">
                    {device.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
