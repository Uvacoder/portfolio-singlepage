import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-white rounded-full" />
        <span className="text-sm text-white font-semibold tracking-widest uppercase">David Rodríguez</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="hover:text-white font-medium duration-100 ease-in">
          Home
        </Link>
        <Link href="#projects" className="hover:text-white font-medium duration-100 ease-in">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
