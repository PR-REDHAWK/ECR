import { DashboardHeader } from './DashboardHeader';
import { ControlPanel } from './ControlPanel';
import { ColdSetupCard, HotSetupCard } from './SetupCards';
import { OutputSummary } from './OutputSummary';
import { ServiceOptions } from './ServiceOptions';

export default function PowerDashboardSection() {
  return (
    <section className="bg-gradient-to-br from-[#120B2E] via-[#1A1245] to-[#110A24] min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area */}
        <DashboardHeader />

        {/* Top Controls Row */}
        <ControlPanel />

        {/* Middle and Bottom Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          
          {/* Left Column - Cold Card */}
          <div className="lg:col-span-3">
             <ColdSetupCard />
          </div>

          {/* Center Column - Output & Services */}
          <div className="lg:col-span-6 flex flex-col gap-6">
             <OutputSummary />
             <ServiceOptions />
          </div>

          {/* Right Column - Hot Card & AI */}
          <div className="lg:col-span-3 flex flex-col gap-4">
             <HotSetupCard />
             
             {/* Bottom Right AI Bubble */}
             <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/10 backdrop-blur-xl border border-teal-400/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(45,212,191,0.1)] relative w-full lg:mt-2 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-300 font-semibold text-sm drop-shadow-md">AI Suggestion</span>
                </div>
                <p className="text-teal-50 text-sm leading-relaxed">Our AI recommends ECR Pro for extra stability in extreme cold</p>
                {/* Decorative curve arrow pointing left */}
                <div className="absolute -left-[4.5rem] bottom-10 hidden lg:block">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-teal-400 opacity-70">
                    <path d="M55 35 C30 35, 20 10, 5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                    <path d="M12 4 L4 10 L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Decorative background glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
