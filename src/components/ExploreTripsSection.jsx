import React, { useState } from 'react';
import TopPill from './TopPill';

// Import images
import bgImage from '../assets/images/1.jpg (1).jpeg';
import img1 from '../assets/images/TUNGNATH.jpg.jpeg';
import img2 from '../assets/images/SPITI VALLEY.jpg.jpeg';
import img3 from '../assets/images/MUSSORIE.jpg.jpeg';

export default function ExploreTripsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const tags = [
    "DELHI", "UTTRAKHAND", "MUMBAI", "NAGALAND", 
    "SIKKIM", "MEGHALAYA", "NEPAL", "HIMACHAL PRADESH"
  ];

  return (
    <section id="trips"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col py-6 px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      {/* 1. HEADER */}
      <div className="w-full flex justify-between items-start mt-2">
        {/* Left: TRENDING NOW */}
        <div className="text-[#0a2e5c] font-black italic text-4xl md:text-5xl transform -rotate-12 translate-y-6 translate-x-4 md:translate-x-12 drop-shadow-lg leading-tight uppercase tracking-tighter">
          Trending<br/>Now
        </div>
        
        {/* Right: reuse TopPill component */}
        <div className="flex gap-4 items-center">
            <TopPill />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center w-full max-w-[1400px] mx-auto mt-4 md:mt-2">
        
        {/* 2. SEARCH BAR STYLE ELEMENT */}
        <div className="mb-10 lg:mb-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full px-6 py-2.5 shadow-xl border-4 border-white/50 w-full max-w-lg">
          <svg className="w-7 h-7 text-slate-500 mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            className="w-full bg-transparent text-[#758092] text-xl font-black italic tracking-wide placeholder-[#758092] focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1"
            placeholder="Planning your next trip?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* 3. IMAGE GRID Container */}
        <div className="w-full bg-white/20 backdrop-blur-md border-[2px] border-white/30 rounded-[2rem] p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] mb-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
            <img src={img1} alt="Trip 1" className="w-full aspect-square object-cover rounded-sm shadow-[0_25px_25px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_30px_40px_-15px_rgba(0,0,0,0.9)] cursor-pointer" />
            <img src={img2} alt="Trip 2" className="w-full aspect-[1/1] object-cover rounded-sm shadow-[0_25px_25px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_30px_40px_-15px_rgba(0,0,0,0.9)] cursor-pointer" />
            <img src={img3} alt="Trip 3" className="w-full aspect-[1.1] object-cover rounded-sm shadow-[0_25px_25px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_30px_40px_-15px_rgba(0,0,0,0.9)] cursor-pointer" />
          </div>
        </div>

        {/* 4. LOCATION TAGS GRID Container */}
        <div className="w-full bg-white/30 backdrop-blur-md border-[2px] border-white/30 rounded-full p-6 md:px-16 md:py-8 shadow-lg">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-4">
            {tags.filter(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())).map((tag, i) => (
              <div key={i} className="flex justify-center md:justify-start items-center">
                <button className="text-black font-extrabold text-[15px] md:text-lg tracking-wide hover:text-blue-900 uppercase pl-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:scale-95">
                  {tag}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
