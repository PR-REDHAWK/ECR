export default function TopPill() {
  return (
    <div className="flex items-center gap-2 bg-[#eaeff6] bg-opacity-80 rounded-full px-2 py-1 shadow-sm border border-white/40 backdrop-blur-md">
      <span className="text-sm pl-1 pr-0.5">🇮🇳</span>
      <img 
        src="https://api.dicebear.com/7.x/notionists/svg?seed=Pritam&backgroundColor=c0aede,d1d4f9,ffd5dc,ffdfbf" 
        alt="User Avatar" 
        className="w-8 h-8 rounded-full object-cover border-2 border-[#b5c7ef]"
      />
      <span className="text-[#05103a] font-bold italic pr-2 text-sm">Hello Pritam !</span>
    </div>
  );
}
