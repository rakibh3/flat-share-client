'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import logo from '@/../public/assets/logo.svg';
import { logoutUser } from '../../_action/authAction';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useAuth } from '@/lib/AuthProvider';
import profileImg from '@/../public/assets/profile.png';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Edit,
  HomeIcon,
  LayoutDashboard,
  LogOut,
  RectangleEllipsis,
  ShieldAlert,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = ({ user }: any) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { setUser } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const routeMap: Record<string, string> = {
    USER: '/dashboard',
    ADMIN: '/dashboard/admin',
  };

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'block text-rose-600 font-bold flex gap-2'
      : 'block text-gray-800 hover:text-rose-600 flex gap-2';

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <nav className="bg-white sticky top-0 shadow-md z-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
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

                {/* Dropdown Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Avatar>
                        {user?.profileImg ? (
                          <Image
                            src={user.profileImg}
                            alt="Avatar"
                            height={40}
                            width={40}
                          />
                        ) : (
                          <Image
                            src={profileImg}
                            alt="Avatar"
                            height={40}
                            width={40}
                          />
                        )}
                        <AvatarFallback>PP</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <Link
                        href="/edit-profile"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/change-password"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <RectangleEllipsis className="h-4 w-4" />
                        Change Password
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden">
            {/* Dropdown Profile Mobile*/}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Avatar>
                    {user?.profileImg ? (
                      <Image
                        src={user.profileImg}
                        alt="Avatar"
                        height={40}
                        width={40}
                      />
                    ) : (
                      <Image
                        src={profileImg}
                        alt="Avatar"
                        height={40}
                        width={40}
                      />
                    )}
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link
                    href="/"
                    // className="flex items-center gap-2"
                    className={getLinkClass('/')}
                    prefetch={false}
                  >
                    <HomeIcon className="h-4 w-4" />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/about"
                    // className="flex items-center gap-2"
                    className={getLinkClass('/about')}
                    prefetch={false}
                  >
                    <ShieldAlert className="h-4 w-4" />
                    About Us
                  </Link>
                </DropdownMenuItem>
                {user ? (
                  <>
                    <DropdownMenuItem>
                      <Link
                        href={routeMap[user.role]}
                        className={getLinkClass(routeMap[user.role])}
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/edit-profile"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/change-password"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <RectangleEllipsis className="h-4 w-4" />
                        Change Password
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <button
                        onClick={handleLogin}
                        className="flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Login
                      </button>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
