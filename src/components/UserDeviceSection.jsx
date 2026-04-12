import React from 'react';
import TopPill from './TopPill';

export default function UserDeviceSection({
  serviceType = 'rent',
  startDate = new Date().toISOString().split('T')[0],
  days = 14,
  location = 'normal',
  recommendation = null,
}) {
  const formattedDate = new Date(startDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const usedComponents =
    location === 'cold'
      ? 'Heater, Insulation, Solar'
      : location === 'hot'
      ? 'AC, Cooling Fans, Solar'
      : 'Standard AC, Standard Battery';

  const totalBill = recommendation?.estimatedCost
    ? `₹${recommendation.estimatedCost.toLocaleString()}`
    : 'Calculating...';

  const batteryPercentage = Math.max(10, 100 - (days % 20) * 2);

  return (
    <section id="user-device" className="min-h-[80vh] py-12 px-4 md:px-12 lg:px-16 w-full relative">
      {/* Top right pill */}
      <div className="absolute top-8 right-8 z-10 hidden md:block">
        <TopPill />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-12 md:pt-0">
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-8">
          
          {/* Left Panel: Info Card */}
          <div className="bg-[#dae8f5]/80 backdrop-blur-md rounded-3xl border border-white/60 p-8 md:p-12 shadow-sm flex flex-col justify-start w-full min-h-[500px]">
            <h1 className="text-5xl md:text-6xl font-black mb-10 text-black tracking-wide drop-shadow-sm">
              Your Device
            </h1>
            
            <div className="flex flex-col gap-8 w-full mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">
                  {serviceType === 'buy' ? 'PURCHASED ON :' : 'RENTED ON :'}
                </span>
                <span className="font-semibold text-gray-800">{formattedDate}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">BATTERY PERCENTAGE :</span>
                <span className="font-semibold text-gray-800">{batteryPercentage}%</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">DAYS LEFT :</span>
                <span className="font-semibold text-gray-800">{days} Days</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">USED COMPONENTS :</span>
                <span className="font-semibold text-gray-800">{usedComponents}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">PLACE VISITED :</span>
                <span className="font-semibold text-gray-800 capitalize">{location} Environment</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-lg md:text-xl">
                <span className="w-72 font-extrabold text-black tracking-tight">TOTAL BILL :</span>
                <span className="font-semibold text-gray-800">{totalBill}</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Placeholder (Image ignored per instructions) */}
          <div className="hidden md:flex flex-col items-end relative w-full h-full">
            {/* The TopPill is already positioned absolute, but we can put a mobile fallback here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
