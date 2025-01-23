"use client"; // Add this at the top to mark this component as client-side

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      // Close the sidebar on large screen size
      setIsMenuOpen(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  // Effect to handle window resizing
  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <nav className="bg-pink-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* POS System on the left */}
        <h1 className="text-2xl font-bold">POS System</h1>

        {/* Hamburger Menu Button (visible only on small screens) */}
        <div className={`lg:hidden ${isMenuOpen ? "hidden" : ""}`}>
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>

        {/* Links Container (visible on large screens only) */}
        <div className="hidden lg:flex space-x-8 flex-grow justify-center">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Services
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          
          {/* Login Button moved to this section to align with other links */}
          <Link href="#" className="hover:underline">
            Login
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full transition duration-300 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Sidebar (visible only on small screens and when isMenuOpen is true) */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-3xl text-black`} // Add border-radius to the left
      >
        {/* Close Button (X) */}
        <button
          onClick={toggleMenu}
          className="text-black text-3xl absolute top-5 right-6"
        >
          &times; {/* X Icon */}
        </button>

        {/* POS System Title with a line below */}
        <h1 className="text-2xl font-bold text-black mb-4 pb-4">
          POS System
        </h1>

        <div className="border-t-2 border-gray-300 my-4 w-full" />

        {/* Links Container inside Sidebar */}
        <div className="flex flex-col space-y-6 items-start">
          <Link href="#" className="hover:underline text-black">
            Home
          </Link>
          <Link href="#" className="hover:underline text-black">
            About
          </Link>
          <Link href="#" className="hover:underline text-black">
            Services
          </Link>
          <Link href="#" className="hover:underline text-black">
            Contact
          </Link>
          <Link href="#" className="hover:underline text-black">
            Login
          </Link>

          <div className="border-t-2 border-gray-300 my-4 w-full" />

          {/* Sign Up Button in the center */}
          <div className="mt-8 flex justify-center w-full">
            <Link
              href="#"
              className="bg-white text-black border-2 border-black px-6 py-2 rounded-full w-full text-center hover:bg-gray-100 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
