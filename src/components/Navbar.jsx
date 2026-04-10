import TopPill from './TopPill';

export default function Navbar() {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Product', href: '#product' },
    { label: 'Trips', href: '#trips' },
    { label: 'Dashboard', href: '#dashboard' },
  ];

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
          <a key={link.label} href={link.href} className="hover:text-blue-700 transition-colors uppercase tracking-wide hover:scale-105 active:scale-95 duration-300">
            {link.label}
          </a>
        ))}
      </div>

      <div>
        <TopPill />
      </div>
    </nav>
  );
}
