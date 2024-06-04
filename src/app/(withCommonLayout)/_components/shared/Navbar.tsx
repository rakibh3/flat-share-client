'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import logo from '@/../public/assets/logo.svg';
import { logoutUser } from '../../_action/authAction';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const Navbar = ({ user }: any) => {
  const routeMap: Record<string, string> = {
    USER: '/dashboard',
    ADMIN: '/dashboard/admin',
  };

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'block text-rose-600 font-bold'
      : 'block text-gray-800 hover:text-rose-600';

  const handleLogout = async () => {
    await logoutUser();
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <nav className="bg-white sticky top-0 shadow-md z-10">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-rose-600">
              <Image src={logo} alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className="items-center hidden md:flex space-x-4">
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass('/about')}>
              About Us
            </Link>

            {user ? (
              <>
                <Link
                  href={routeMap[user.role]}
                  className={getLinkClass(routeMap[user.role])}
                >
                  Dashboard
                </Link>
                <Link href="/profile" className={getLinkClass('/profile')}>
                  My Profile
                </Link>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-rose-600"
              aria-label="Toggle menu"
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
              <Link href="/" className={getLinkClass('/')}>
                Home
              </Link>
              <Link href="/about" className={getLinkClass('/about')}>
                About Us
              </Link>
              {user ? (
                <>
                  <Link
                    href={routeMap[user.role]}
                    className={getLinkClass(routeMap[user.role])}
                  >
                    Dashboard
                  </Link>
                  <Link href="/profile" className={getLinkClass('/profile')}>
                    My Profile
                  </Link>
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Button>
                    <Link href="/login">Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
