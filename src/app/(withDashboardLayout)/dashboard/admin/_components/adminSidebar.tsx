'use client';

import { useEffect, useState } from 'react';
type Props = {};
import {
  Home,
  UsersRound,
  ChevronRight,
  DoorOpen,
  LayoutDashboard,
  KeyRound,
  LogOut,
} from 'lucide-react';
import { useWindowWidth } from '@react-hook/window-size';
import { Nav } from '@/app/(withDashboardLayout)/_components/nav';
import { Button } from '@/components/ui/button';

export default function AdminSidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  useEffect(() => {
    setIsClient(true);
  }, []);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      className={`relative min-w-[80px]  border-r px-3 pb-10 pt-24 flex flex-col justify-between h-full ${
        isCollapsed ? 'min-w-[80px]' : 'md:min-w-[200px]'
      }`}
    >
      {isClient && !mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2 bg-rose-100 hover:bg-rose-500 hover:text-white"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={isClient && mobileWidth ? true : isCollapsed}
        links={[
          {
            title: 'Home',
            href: '/',
            icon: Home,
            variant: 'default',
          },
          {
            title: 'Dashboard',
            href: '/dashboard/admin',
            icon: LayoutDashboard,
            variant: 'default',
          },

          {
            title: 'Users',
            href: '/dashboard/admin/users',
            icon: UsersRound,
            variant: 'ghost',
          },
          {
            title: 'Flats',
            href: '/dashboard/admin/flats',
            icon: DoorOpen,
            variant: 'ghost',
          },
          {
            title: 'Change Password',
            href: '/dashboard/admin/change-password',
            icon: KeyRound,
            variant: 'ghost',
          },
          {
            title: 'Logout',
            href: '/logout',
            icon: LogOut,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  );
}
