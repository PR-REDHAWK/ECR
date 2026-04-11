export function OutputSummary({
  totalPower,
  days,
  serviceType,
  usageScore,
  location,
  recommendation,
  loading,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(168,85,247,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300/70">
            Power Summary
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
            {loading
              ? 'Analyzing...'
              : recommendation?.recommendedPlan || 'ECR Basic'}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-xs text-zinc-400">Usage Score</p>
          <p className="text-3xl font-bold text-cyan-300">{usageScore}%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs uppercase text-zinc-400 mb-1">Total Power</p>
          <p className="text-xl font-semibold text-white">{totalPower} kWh</p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs uppercase text-zinc-400 mb-1">Duration</p>
          <p className="text-xl font-semibold text-white">{days} Days</p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs uppercase text-zinc-400 mb-1">Service</p>
          <p className="text-xl font-semibold text-white capitalize">
            {serviceType}
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs uppercase text-zinc-400 mb-1">Location</p>
          <p className="text-xl font-semibold text-white capitalize">
            {location}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-2">
          Estimated Cost
        </p>

        <p className="text-3xl font-bold text-white">
          {loading
            ? '...'
            : `₹${recommendation?.estimatedCost?.toLocaleString() || 0}`}
        </p>

        <p className="mt-2 text-sm text-cyan-100/80">
          {loading
            ? 'Calculating best setup for you...'
            : recommendation?.message}
        </p>
      </div>
    </div>
  );
}