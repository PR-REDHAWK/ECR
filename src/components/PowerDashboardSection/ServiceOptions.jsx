export function ServiceOptions({ serviceType, setServiceType }) {
  const getTabClass = (type) =>
    serviceType === type
      ? "bg-white text-black px-10 py-2.5 rounded-full text-sm font-bold shadow-md transition"
      : "text-gray-400 px-10 py-2.5 rounded-full text-sm font-semibold hover:text-white transition";

  const getCardClass = (type) =>
    `bg-white/[0.04] backdrop-blur-xl rounded-2xl px-8 py-4 flex flex-col items-center justify-center transition cursor-pointer flex-1 min-w-[160px] shadow-xl ${
      serviceType === type 
        ? 'border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
        : 'border border-white/10 hover:border-white/20 hover:bg-white/10'
    }`;

  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-white font-medium mb-6 tracking-wide">Service Options</h3>
      
      {/* Tabs */}
      <div className="bg-white/5 backdrop-blur-md rounded-full p-1.5 flex mb-8 border border-white/10 shadow-lg">
        <button onClick={() => setServiceType('rent')} className={getTabClass('rent')}>Rent</button>
        <button onClick={() => setServiceType('buy')} className={getTabClass('buy')}>Buy</button>
        <button onClick={() => setServiceType('service')} className={getTabClass('service')}>Service</button>
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-5 w-full">
        <div onClick={() => setServiceType('rent')} className={getCardClass('rent')}>
          <span className="text-white font-semibold text-sm mb-1.5">Solo Explorer</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">(Rent)</span>
        </div>
        <div onClick={() => setServiceType('buy')} className={getCardClass('buy')}>
          <span className="text-white font-semibold text-sm mb-1.5">Family Off-Grid</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">(Buy)</span>
        </div>
        <div onClick={() => setServiceType('service')} className={getCardClass('service')}>
          <span className="text-white font-semibold text-sm mb-1.5 flex items-center justify-center text-center">Service</span>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider flex text-center whitespace-nowrap">(Maintenance/Repair)</span>
        </div>
      </div>
    </div>
  );
}
