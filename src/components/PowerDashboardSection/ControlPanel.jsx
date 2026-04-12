export function ControlPanel({
  location,
  setLocation,
  people,
  setPeople,
  days,
  setDays,
  powerCapacity,
  setPowerCapacity,
  backupDuration,
  setBackupDuration,
  totalPower,
  startDate,
  setStartDate,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 mb-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">Location</label>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none"
        >
          <option value="cold">Cold</option>
          <option value="normal">Normal</option>
          <option value="hot">Hot</option>
        </select>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">People</label>

        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none"
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">Days</label>

        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none"
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">
          Power Capacity
        </label>

        <input
          type="number"
          min="0.5"
          step="0.5"
          value={powerCapacity}
          onChange={(e) => setPowerCapacity(Number(e.target.value))}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none"
        />

        <p className="mt-2 text-xs text-zinc-400">
          Total: {totalPower} kWh
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">
          Backup Hours
        </label>

        <input
          type="number"
          min="1"
          value={backupDuration}
          onChange={(e) => setBackupDuration(Number(e.target.value))}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none"
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
        <label className="block text-sm text-zinc-300 mb-2">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-white outline-none appearance-none"
          style={{ colorScheme: 'dark' }}
        />
      </div>
    </div>
  );
}