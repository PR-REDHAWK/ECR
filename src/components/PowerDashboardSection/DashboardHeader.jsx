export function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-12 relative z-20">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Power Your Journey <br /> Anywhere
        </h2>
        <p className="text-gray-300 md:text-lg mb-8 font-light leading-relaxed">
          The All-In-One Eco-Charge Roommate (ECR) <br className="hidden md:block" />
          for AC, Heat, Power, Sound & Light.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Rent Now
          </button>
          <button className="bg-transparent border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition">
            Buy Now
          </button>
          <button className="text-white hover:text-gray-300 font-semibold px-4 py-3.5 transition">
            Explore Features
          </button>
        </div>
      </div>
      
      {/* Top right AI Suggestion bubble */}
      <div className="hidden lg:flex flex-col bg-gradient-to-br from-indigo-500/20 to-purple-500/10 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-5 shadow-2xl relative w-64 mt-8 lg:mt-0 lg:-ml-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-indigo-300 font-semibold text-xs uppercase tracking-wider drop-shadow">AI Suggestion</span>
        </div>
        <p className="text-indigo-50 text-sm leading-relaxed font-medium">Best optimized setup <br /> for your trip</p>
        {/* Curvy arrow pointing down/left - decorative */}
        <div className="absolute -left-14 bottom-4 text-indigo-400/50 hidden xl:block">
           <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
             <path d="M50 10 C30 10, 15 25, 5 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
             <path d="M15 40 L5 45 L5 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
        </div>
      </div>
    </div>
  );
}
