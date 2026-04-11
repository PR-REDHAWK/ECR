import { Link, useNavigate } from 'react-router-dom';
import TopPill from './TopPill';

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Product', href: '#product' },
    { label: 'Trips', href: '#trips' },
    { label: 'Dashboard', href: '#dashboard' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 py-4 px-12 bg-white/10 backdrop-blur-md shadow-sm border-b border-white/20 transition-all">
      <div className="flex items-center text-2xl font-bold tracking-tighter text-black">
        El
        <div className="mx-0.5 mt-1 w-[36px] h-[14px] border-[2px] border-black rounded-full flex items-center justify-between px-[3px] bg-gradient-to-r from-blue-300 via-green-300 to-blue-300">
          <div className="w-1.5 h-1.5 bg-[#1746a6] rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#f6d738] rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#1746a6] rounded-full"></div>
        </div>
        X
      </div>

      <div className="flex items-center gap-8 font-bold text-[#0c1a2c]">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-blue-700 transition-colors uppercase tracking-wide hover:scale-105 active:scale-95 duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {token ? (
          <>
            

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
          >
            Login
          </Link>
        )}

        <TopPill />
      </div>
    </nav>
  );
}