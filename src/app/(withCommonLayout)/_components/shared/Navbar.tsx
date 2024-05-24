'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-rose-600">
              <Image src={logo} alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="block text-gray-800 hover:text-rose-600">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-rose-600"
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="block text-gray-800 hover:text-rose-600"
            >
              Login
            </Link>
            <Link
              href="/profile"
              className="block text-gray-800 hover:text-rose-600"
            >
              My Profile
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-rose-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block text-gray-800 hover:text-rose-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-800 hover:text-rose-600"
              >
                About Us
              </Link>
              <Link
                href="/login"
                className="block text-gray-800 hover:text-rose-600"
              >
                Login
              </Link>
              <Link
                href="/profile"
                className="block text-gray-800 hover:text-rose-600"
              >
                My Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
