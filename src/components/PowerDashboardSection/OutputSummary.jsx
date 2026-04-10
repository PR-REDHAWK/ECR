export function OutputSummary({
  totalPower,
  days,
  serviceType,
  usageScore,
  location
}) {
  const getVariant = () => {
    if (location === 'cold') return 'ECR Arctic';
    if (location === 'hot') return 'ECR Oasis';
    return 'ECR Standard';
  };

  const rentCost = days * 25;
  const buyCost = 799;

  let scoreLabel = "Low";
  if (usageScore >= 70) scoreLabel = "High";
  else if (usageScore >= 40) scoreLabel = "Optimal";

  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-center transition-transform hover:-translate-y-1 h-full">
      <h3 className="text-gray-200 font-semibold mb-8 text-lg tracking-wide">Output Summary</h3>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 w-full">
        <div>
           <p className="text-gray-400 text-sm mb-2 font-medium">Recommended ECR Variant</p>
           <p className="text-white text-2xl font-bold tracking-tight">{getVariant()}</p>
        </div>
        <div className="sm:text-right">
           <p className="text-gray-400 text-sm mb-2 font-medium">Cost Estimation ({serviceType})</p>
           <p className="text-white text-lg font-semibold">
              {serviceType === 'rent' ? (
                <><span className="text-white font-bold">${rentCost}</span> <span className="text-gray-400 text-sm">(${25}/day)</span></>
              ) : serviceType === 'buy' ? (
                <><span className="text-white font-bold">${buyCost}</span></>
              ) : (
                <><span className="text-white font-bold">$49/mo</span> <span className="text-gray-400 text-sm">(Service Plan)</span></>
              )}
           </p>
        </div>
      </div>
      
      <div className="mt-auto pt-2">
        <div className="flex justify-between items-end mb-3">
          <span className="text-gray-400 text-sm font-medium">Usage Optimization Score:</span>
          <span className="text-cyan-400 font-bold tracking-wider">{scoreLabel} {Math.round(usageScore)}%</span>
        </div>
        <div className="w-full bg-gray-800/80 rounded-full h-2.5 shadow-inner overflow-hidden relative">
          <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 h-full rounded-full shadow-[0_0_12px_rgba(45,212,191,0.6)] transition-all duration-500 ease-out" style={{width: `${usageScore}%`}}></div>
        </div>
      </div>
    </div>
  );
}
