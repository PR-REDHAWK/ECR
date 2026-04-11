export function ColdSetupCard({ active, recommendation }) {
  const isRecommended =
    recommendation?.recommendedPlan === 'ECR Pro' ||
    recommendation?.recommendedPlan === 'ECR Max';

  return (
    <div
      className={`rounded-3xl border p-5 transition-all duration-300 ${
        active || isRecommended
          ? 'border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
          : 'border-white/10 bg-white/5'
      }`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-2">
        Cold Setup
      </p>

      <h3 className="text-2xl font-bold text-white mb-3">ECR Pro</h3>

      <ul className="space-y-2 text-sm text-zinc-300">
        <li>• Extra battery insulation</li>
        <li>• Longer backup stability</li>
        <li>• Best for mountains & snow</li>
      </ul>

      {isRecommended && (
        <div className="mt-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20 px-3 py-2 text-cyan-200 text-sm">
          Recommended by AI
        </div>
      )}
    </div>
  );
}

export function HotSetupCard({ active, recommendation }) {
  const isRecommended =
    recommendation?.recommendedPlan === 'ECR Basic' &&
    active;

  return (
    <div
      className={`rounded-3xl border p-5 transition-all duration-300 ${
        active || isRecommended
          ? 'border-orange-400/50 bg-orange-500/10 shadow-[0_0_30px_rgba(251,146,60,0.18)]'
          : 'border-white/10 bg-white/5'
      }`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-2">
        Hot Setup
      </p>

      <h3 className="text-2xl font-bold text-white mb-3">ECR Basic</h3>

      <ul className="space-y-2 text-sm text-zinc-300">
        <li>• Cooling optimized battery pack</li>
        <li>• Lightweight travel mode</li>
        <li>• Best for warm climates</li>
      </ul>

      {isRecommended && (
        <div className="mt-4 rounded-xl bg-orange-400/10 border border-orange-400/20 px-3 py-2 text-orange-200 text-sm">
          Recommended by AI
        </div>
      )}
    </div>
  );
}