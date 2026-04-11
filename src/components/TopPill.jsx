export default function TopPill() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md">
      <span>🇮🇳</span>

      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${
          user?.name || 'Guest'
        }`}
        alt="profile"
        className="w-10 h-10 rounded-full border-2 border-blue-200 bg-blue-50"
      />

      <span className="font-semibold text-lg italic text-[#0c1a2c]">
        Hello {user?.name || 'Guest'} !
      </span>
    </div>
  );
}