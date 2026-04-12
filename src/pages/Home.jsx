import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ExploreTripsSection from '../components/ExploreTripsSection';
import DeviceGridSection from '../components/DeviceGridSection';
import PowerDashboardSection from '../components/PowerDashboardSection';
import UserDeviceSection from '../components/UserDeviceSection';

export default function Home() {
  const [location, setLocation] = useState('cold');
  const [people, setPeople] = useState(3);
  const [days, setDays] = useState(14);
  const [powerCapacity, setPowerCapacity] = useState(1.5);
  const [backupDuration, setBackupDuration] = useState(2);
  const [serviceType, setServiceType] = useState('rent');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen w-full flex flex-col pt-24 bg-gradient-to-br from-[#689ef0] via-[#c6e1ff] to-[#f4f7f9] overflow-hidden selection:bg-blue-300 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ExploreTripsSection />
      <DeviceGridSection />
      <PowerDashboardSection
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
        serviceType={serviceType}
        setServiceType={setServiceType}
        startDate={startDate}
        setStartDate={setStartDate}
        recommendation={recommendation}
        loading={loading}
      />
      <UserDeviceSection 
        serviceType={serviceType}
        startDate={startDate}
        days={days}
        location={location}
        recommendation={recommendation}
      />
    </div>
  );
}
