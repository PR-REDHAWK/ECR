import { useEffect, useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { ControlPanel } from './ControlPanel';
import { ColdSetupCard, HotSetupCard } from './SetupCards';
import { OutputSummary } from './OutputSummary';
import { ServiceOptions } from './ServiceOptions';

export default function PowerDashboardSection() {
  const [location, setLocation] = useState('cold');
  const [people, setPeople] = useState(3);
  const [days, setDays] = useState(3);
  const [powerCapacity, setPowerCapacity] = useState(1.5);
  const [backupDuration, setBackupDuration] = useState(2);
  const [serviceType, setServiceType] = useState('rent');

  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalPower = (powerCapacity * days).toFixed(1);
  const usageScore = Math.min(100, powerCapacity * 20);

  const fetchRecommendation = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'http://localhost:5000/api/recommendation',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location,
            people,
            days,
            powerCapacity,
            backupDuration,
            serviceType,
          }),
        }
      );

      const data = await response.json();
      setRecommendation(data);
    } catch (error) {
      console.error('Recommendation fetch failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendation();
  }, [location, people, days, powerCapacity, backupDuration, serviceType]);

  return (
    <section
      id="dashboard"
      className="bg-gradient-to-br from-[#120B2E] via-[#1A1245] to-[#110A24] min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden relative font-sans"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <DashboardHeader />

        <ControlPanel
          location={location}
          setLocation={setLocation}
          people={people}
          setPeople={setPeople}
          days={days}
          setDays={setDays}
          powerCapacity={powerCapacity}
          setPowerCapacity={setPowerCapacity}
          backupDuration={backupDuration}
          setBackupDuration={setBackupDuration}
          totalPower={totalPower}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-3">
            <ColdSetupCard active={location === 'cold'} 
            recommendation={recommendation}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <OutputSummary
              totalPower={totalPower}
              days={days}
              serviceType={serviceType}
              usageScore={usageScore}
              location={location}
              recommendation={recommendation}
              loading={loading}
            />

            <ServiceOptions
              serviceType={serviceType}
              setServiceType={setServiceType}
            />
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <HotSetupCard active={location === 'hot'}
              recommendation={recommendation}
            />

            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/10 backdrop-blur-xl border border-teal-400/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(45,212,191,0.1)] relative w-full lg:mt-2 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-teal-300 font-semibold text-sm drop-shadow-md">
                  AI Suggestion
                </span>
              </div>

              <p className="text-teal-50 text-sm leading-relaxed">
                {loading
                  ? 'Analyzing your setup...'
                  : recommendation?.message ||
                    'Our AI recommends ECR Pro for extra stability in extreme cold'}
              </p>

              <div className="absolute -left-[4.5rem] bottom-10 hidden lg:block">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  className="text-teal-400 opacity-70"
                >
                  <path
                    d="M55 35 C30 35, 20 10, 5 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M12 4 L4 10 L12 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}