export function ServiceOptions() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-white font-medium mb-6 tracking-wide">Service Options</h3>
      
      {/* Tabs */}
      <div className="bg-white/5 backdrop-blur-md rounded-full p-1.5 flex mb-8 border border-white/10 shadow-lg">
        <button className="bg-white text-black px-10 py-2.5 rounded-full text-sm font-bold shadow-md transition hover:bg-gray-100">Rent</button>
        <button className="text-gray-400 px-10 py-2.5 rounded-full text-sm font-semibold hover:text-white transition">Buy</button>
        <button className="text-gray-400 px-10 py-2.5 rounded-full text-sm font-semibold hover:text-white transition">Service</button>
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-5 w-full">
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 transition cursor-pointer flex-1 min-w-[160px] shadow-xl">
          <span className="text-white font-semibold text-sm mb-1.5">Solo Explorer</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">(Rent)</span>
        </div>
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 transition cursor-pointer flex-1 min-w-[160px] shadow-xl">
          <span className="text-white font-semibold text-sm mb-1.5">Family Off-Grid</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">(Buy)</span>
        </div>
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex flex-col items-center justify-center mb-4 md:mb-0 hover:bg-white/10 hover:border-white/20 transition cursor-pointer flex-1 min-w-[160px] shadow-xl">
          <span className="text-white font-semibold text-sm mb-1.5 flex items-center justify-center text-center">Service</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider flex text-center whitespace-nowrap">(Maintenance/Repair)</span>
        </div>
      </div>
    </div>
  );
}
