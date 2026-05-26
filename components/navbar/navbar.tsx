"use client";

import Image from "next/image";
import Navlink from "./navlink";

const HEADER_HEIGHT = 45; // harus sama dengan Header

const Navbar = () => {
  return (
    <div
      className="fixed top-12 z-60 w-full bg-white/70 backdrop-blur-md border-b border-white/40 shadow-md fixed-top-sync transition-all duration-300"
      style={{ top: HEADER_HEIGHT }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo kiri */}
        <div className="flex items-center">
          <Image
            src="/logoadv.png"
            alt="ARDY PURBA LAW FIRM"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Menu center */}
        <div className="flex-1 flex justify-center relative">
          <Navlink />
        </div>

        {/* Mobile button kanan */}
        <div className="flex items-center lg:hidden">{/* handled in Navlink */}</div>
      </div>

      {/* Accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />
    </div>
  );
};

export default Navbar;
