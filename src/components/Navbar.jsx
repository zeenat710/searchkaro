export default function Navbar() {
  return (
    <div className="h-14 bg-white shadow flex justify-end items-center px-6">
      <div className="flex items-center gap-3">
        <span>John Doe</span>
        <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}