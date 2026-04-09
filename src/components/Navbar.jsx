import TopPill from './TopPill';

export default function Navbar() {
  const links = ['Generate model', 'Home', 'About', 'Contact', 'Shop'];

  return (
    <nav className="w-full flex items-center justify-between py-4 px-12 z-50 sticky top-0 bg-white/40 backdrop-blur-md shadow-sm border-b border-white/20 transition-all">
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
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-700 transition-colors">
            {link}
          </a>
        ))}
      </div>

      <div>
        <TopPill />
      </div>
    </nav>
  );
}
