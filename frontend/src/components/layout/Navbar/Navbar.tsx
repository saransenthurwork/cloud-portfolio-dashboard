import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        h-[72px]
        flex
        items-center
        justify-between
        px-10
        border-b
        border-[#232B36]
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          bg-[#151A22]
          border
          border-[#232B36]
          rounded-2xl
          px-4
          h-12
          w-[360px]
        "
      >
        <Search size={18} className="text-gray-500" />

        <input
          placeholder="Search infrastructure..."
          className="
            w-full
            bg-transparent
            outline-none
            text-white
            placeholder:text-gray-500
          "
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="text-gray-400" />

        <div className="h-10 w-10 rounded-full bg-[#6C7CFF]" />
      </div>
    </header>
  );
}