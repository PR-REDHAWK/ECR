export function ColdSetupCard({ active }) {
  return (
    <div className={`bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 shadow-2xl relative overflow-hidden group transition duration-300 h-full flex flex-col ${active ? 'border-cyan-400/80 border-2 shadow-[0_0_20px_rgba(34,211,238,0.25)]' : 'border border-cyan-500/20 hover:border-cyan-400/50'}`}>
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition ${active ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}></div>
      
      <div className="flex items-center justify-between mb-4 mt-2">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-inner transition ${active ? 'bg-cyan-900/50 border-cyan-400/50' : 'bg-cyan-900/30 border-cyan-500/30'}`}>
          <span className="text-cyan-300 text-sm">❄️</span>
          <span className="text-cyan-100 text-xs font-semibold tracking-wide">Cold Region Setup Card</span>
        </div>
      </div>
      <p className="text-gray-400 text-xs mb-6 px-1 font-medium">Optimal Setup: <span className="text-gray-200">ECR Arctic</span></p>
      
      <div className="grid grid-cols-2 gap-y-6 gap-x-2 mb-8 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">♨️</div>
          <span className="text-gray-300 text-sm font-medium">Heater</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">💡</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Emergency<br/>Lights</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">🔋</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Power<br/>Bank</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">🧊</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Insulated<br/>System</span>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-end mb-3">
          <span className="text-gray-400 text-sm font-medium">System Efficiency:</span>
          <span className="text-green-400 font-bold tracking-wider">92%</span>
        </div>
        <div className="w-full bg-gray-800/80 rounded-full h-2 shadow-inner overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" style={{width: '92%'}}></div>
        </div>
      </div>
    </div>
  );
}

export function HotSetupCard({ active }) {
  return (
    <div className={`bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 shadow-2xl relative overflow-hidden group transition duration-300 h-full flex flex-col ${active ? 'border-orange-400/80 border-2 shadow-[0_0_20px_rgba(251,146,60,0.25)]' : 'border border-orange-500/20 hover:border-orange-400/50'}`}>
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-red-500 transition ${active ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}></div>
      
      <div className="flex items-center justify-between mb-4 mt-2">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-inner transition ${active ? 'bg-orange-900/50 border-orange-400/50' : 'bg-orange-900/30 border-orange-500/30'}`}>
          <span className="text-orange-400 text-sm">🔥</span>
          <span className="text-orange-100 text-xs font-semibold tracking-wide">Hot Region Setup Card</span>
        </div>
      </div>
      <p className="text-gray-400 text-xs mb-6 px-1 font-medium">Optimal Setup: <span className="text-gray-200">ECR Oasis</span></p>
      
      <div className="grid grid-cols-2 gap-y-6 gap-x-2 mb-8 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">❄️</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">AC<br/>Cooling</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">🌀</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Fan<br/>Mode</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">🔋</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Power<br/>Backup</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner group-hover:bg-white/10 transition">🌡️</div>
          <span className="text-gray-300 text-xs font-medium leading-tight">Cooling<br/>Efficiency</span>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-end mb-3">
          <span className="text-gray-400 text-sm font-medium">System Efficiency:</span>
          <span className="text-green-400 font-bold tracking-wider">88%</span>
        </div>
        <div className="w-full bg-gray-800/80 rounded-full h-2 shadow-inner overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" style={{width: '88%'}}></div>
        </div>
      </div>
    </div>
  );
}
