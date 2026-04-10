export default function HeroSection() {
  const titleLetters = ['E', 'L', 'I', 'T', 'E', 'X'];

  return (
    <div id="hero" className="flex-1 flex flex-col items-center justify-center relative w-full py-20 min-h-[60vh]">
      
      {/* Huge text ELITEX */}
      <h1 className="flex justify-center w-full px-4 mb-16 text-black font-black text-6xl md:text-8xl lg:text-[10rem]">
        {titleLetters.map((letter, index) => (
          <span 
            key={index} 
            className="mx-4 md:mx-10 lg:mx-16 drop-shadow-sm self-center"
          >
            {letter}
          </span>
        ))}
      </h1>

      {/* Buttons container */}
      <div className="flex items-center justify-center gap-6 z-10 w-full mb-10">
        <a href="#product" className="bg-[#fffcf9] text-black border-2 border-black font-bold text-lg px-8 py-3.5 rounded-[2rem] hover:bg-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:scale-95 shadow-sm whitespace-nowrap">
          Explore ECR
        </a>
        <a href="#trips" className="bg-[#0b3370] text-white font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-blue-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(11,51,112,0.4)] active:scale-95 shadow-2xl shadow-blue-950/50 whitespace-nowrap">
          Plan a TRIP
        </a>
      </div>
      
    </div>
  );
}
