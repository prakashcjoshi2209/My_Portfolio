"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">My Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/project" className="hover:text-gray-400">Projects</Link>
            <Link href="/experience" className="hover:text-gray-400">Experience</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-800 absolute w-full py-4 px-6">
          <Link href="/" className="block py-2" onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2" onClick={() => setNavOpen(false)}>About</Link>
          <Link href="/projects" className="block py-2" onClick={() => setNavOpen(false)}>Projects</Link>
          <Link href="/experience" className="block py-2" onClick={() => setNavOpen(false)}>Experience</Link>
          <Link href="/contact" className="block py-2" onClick={() => setNavOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


