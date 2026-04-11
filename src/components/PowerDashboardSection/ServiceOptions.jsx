export function ServiceOptions({ serviceType, setServiceType }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => setServiceType('rent')}
        className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
          serviceType === 'rent'
            ? 'border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
            : 'border-white/10 bg-white/5 hover:bg-white/10'
        }`}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-2">
          Rent
        </p>

        <h4 className="text-xl font-bold text-white mb-1">Temporary Setup</h4>

        <p className="text-sm text-zinc-300">
          Best for short trips, events, or emergency backup.
        </p>
      </button>

      <button
        onClick={() => setServiceType('buy')}
        className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
          serviceType === 'buy'
            ? 'border-violet-400 bg-violet-500/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
            : 'border-white/10 bg-white/5 hover:bg-white/10'
        }`}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300 mb-2">
          Buy
        </p>

        <h4 className="text-xl font-bold text-white mb-1">Permanent Setup</h4>

        <p className="text-sm text-zinc-300">
          Ideal for long-term ownership and frequent use.
        </p>
      </button>
    </div>
  );
}