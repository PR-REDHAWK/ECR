import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ExploreTripsSection from '../components/ExploreTripsSection';
import DeviceGridSection from '../components/DeviceGridSection';
import PowerDashboardSection from '../components/PowerDashboardSection';
import UserDeviceSection from '../components/UserDeviceSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col pt-2 bg-gradient-to-br from-[#689ef0] via-[#c6e1ff] to-[#f4f7f9] overflow-hidden selection:bg-blue-300 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ExploreTripsSection />
      <DeviceGridSection />
      <PowerDashboardSection />
      <UserDeviceSection />
    </div>
  );
}
