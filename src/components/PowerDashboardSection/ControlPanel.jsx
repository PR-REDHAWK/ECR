export function ControlPanel({
  location, setLocation,
  people, setPeople,
  days, setDays,
  powerCapacity, setPowerCapacity,
  backupDuration, setBackupDuration,
  totalPower
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      {/* Location Selector (Left) */}
      <div className="lg:col-span-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transition-transform hover:-translate-y-1">
        <h3 className="text-gray-300 text-sm mb-5 font-medium">Location Selector</h3>
        <div className="flex gap-3 justify-between">
          <button 
            onClick={() => setLocation('cold')}
            className={`flex-1 border rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-3 transition shadow-inner ${location === 'cold' ? 'border-white/40 bg-white/10' : 'border-white/10 hover:bg-white/5 bg-white/5'}`}>
            <span className={`text-2xl ${location === 'cold' ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]' : 'text-gray-500'}`}>❄️</span> 
            <span className={`text-xs font-medium ${location === 'cold' ? 'text-white' : 'text-gray-400'}`}>Cold</span>
          </button>
          <button 
            onClick={() => setLocation('hot')}
            className={`flex-1 border rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-3 transition ${location === 'hot' ? 'border-white/40 bg-white/10 shadow-inner' : 'border-transparent hover:bg-white/5'}`}>
            <span className={`text-2xl ${location === 'hot' ? 'text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]' : 'text-gray-500'}`}>☀️</span>
            <span className={`text-xs font-medium ${location === 'hot' ? 'text-white' : 'text-gray-400'}`}>Hot</span>
          </button>
          <button 
            onClick={() => setLocation('custom')}
            className={`flex-1 border rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-3 transition ${location === 'custom' ? 'border-white/40 bg-white/10 shadow-inner' : 'border-transparent hover:bg-white/5'}`}>
            <span className={`text-2xl ${location === 'custom' ? 'text-gray-200' : 'text-gray-500'}`}>◎</span>
            <span className={`text-xs font-medium ${location === 'custom' ? 'text-white' : 'text-gray-400'}`}>Custom</span>
          </button>
        </div>
      </div>

      {/* Sliders and Inputs (Center) */}
      <div className="lg:col-span-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Number of People */}
          <div>
            <div className="flex justify-between text-gray-300 text-sm mb-4 font-medium">
              <span>Number of People</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-cyan-400 font-semibold w-4 text-center">{people}</span>
               <div className="relative flex-1 group">
                 <div className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 bg-gray-700/80 rounded-full"></div>
                 <div className="absolute top-1/2 left-0 h-1.5 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.5)]" style={{ width: `${(people / 10) * 100}%` }}></div>
                 <input 
                   type="range" 
                   className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 opacity-0 cursor-pointer" 
                   min="1" max="10" 
                   value={people}
                   onChange={(e) => setPeople(Number(e.target.value))}
                 />
                 <div className="absolute top-1/2 w-4 h-4 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform pointer-events-none" style={{ left: `${(people / 10) * 100}%` }}></div>
               </div>
               <span className="text-gray-500 font-semibold w-4 text-center text-sm">10</span>
            </div>
          </div>

          {/* Number of Days */}
          <div>
            <div className="flex justify-between text-gray-300 text-sm mb-4 font-medium">
              <span>Number of Days</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 px-5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition group shadow-inner">
              <div className="flex items-center gap-3 w-full">
                <span className="text-gray-400 group-hover:text-white transition">📅</span>
                <input 
                  type="number"
                  min="1"
                  className="bg-transparent text-gray-300 text-sm font-medium outline-none w-full"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Required Power Capacity */}
          <div>
            <div className="flex justify-between text-gray-300 text-sm mb-4 font-medium">
              <span>Required Power Capacity</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-cyan-400 font-semibold w-6 text-center">{powerCapacity}</span>
               <div className="relative flex-1 group">
                 <div className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 bg-gray-700/80 rounded-full"></div>
                 <div className="absolute top-1/2 left-0 h-1.5 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.5)]" style={{ width: `${((powerCapacity - 0.5) / 4.5) * 100}%` }}></div>
                 <input 
                   type="range" 
                   className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 opacity-0 cursor-pointer" 
                   min="0.5" max="5.0" step="0.1" 
                   value={powerCapacity}
                   onChange={(e) => setPowerCapacity(Number(e.target.value))}
                 />
                 <div className="absolute top-1/2 w-4 h-4 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-transform pointer-events-none" style={{ left: `${((powerCapacity - 0.5) / 4.5) * 100}%` }}></div>
               </div>
               <span className="text-gray-500 text-sm font-semibold w-8">kWh</span>
            </div>
          </div>

          {/* Backup Duration Needed */}
          <div>
            <div className="flex justify-between text-gray-300 text-sm mb-4 font-medium">
              <span>Backup Duration Needed</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 px-5 flex items-center justify-between shadow-inner">
              <input 
                 type="number"
                 min="1"
                 className="bg-transparent text-white text-sm font-semibold outline-none w-16"
                 value={backupDuration}
                 onChange={(e) => setBackupDuration(Number(e.target.value))}
              />
              <span className="text-gray-400 text-sm font-medium">days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Total Power Required (Right) */}
      <div className="lg:col-span-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-center relative transition-transform hover:-translate-y-1">
        <div className="absolute top-5 right-5 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3 className="text-gray-300 text-sm mb-2 font-medium">Total Power Required</h3>
        <div className="text-white text-[2rem] font-bold mb-6 tracking-tight flex items-baseline gap-1">{totalPower} <span className="text-lg font-medium text-gray-300">kWh</span></div>
        <h3 className="text-gray-300 text-sm mb-2 font-medium">Estimated Battery Life</h3>
        <div className="text-white text-lg font-semibold tracking-wide">Runs for {backupDuration} Days</div>
      </div>
    </div>
  );
}
