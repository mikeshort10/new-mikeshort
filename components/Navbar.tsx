import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 h-16 text-gray-200 fixed top-0 left-0 flex justify-between w-full p-5 z-50 border-b-2 border-gray-200">
      <Link href="/">
        <div className="flex justify-center items-center cursor-pointer">
          <img src="/favicon.ico" alt="logo" className="h-10 rounded" />
          <span className="ml-3 text-xl">Mike Short</span>
        </div>
      </Link>
      <div>
        <Link href="#about">
          About
        </Link>
      </div>
    </nav>
  );
};
