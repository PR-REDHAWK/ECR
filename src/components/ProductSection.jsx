import React from 'react';
import productImage from '../assets/images/WhatsApp Image 2026-04-08 at 10.55.28 PM.jpeg';

export default function ProductSection() {
  return (
    <section className="w-full px-8 md:px-12 py-16 text-black">
      {/* Section Title */}
      <h2 className="text-5xl md:text-7xl font-black mb-12 lg:mb-16 tracking-tight">
        EcoCharge roommate
      </h2>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        
        {/* Left Side: Description */}
        <div className="flex justify-center text-[#1c3f60] font-medium text-lg md:text-2xl leading-relaxed lg:leading-[1.6]">
          <p className="text-center max-w-xl">
            ECR Built with a vision to simplify modern travel, ECR integrates essential features like portable cooling, immersive audio, ambient lighting, and efficient solar-powered charging into a single compact device. Whether you're on a road trip, exploring remote destinations, or facing unexpected power outages, ECR ensures you stay connected, comfortable, and powered at all times.
          </p>
        </div>

        {/* Right Side: Product Image */}
        <div className="flex justify-center items-center w-full">
          <img 
            src={productImage} 
            alt="EcoCharge Roommate Device" 
            className="w-full h-auto max-w-[600px] object-contain drop-shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
}
