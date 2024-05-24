import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AdminSidebar from './_components/adminSidebar';
// import { AdminSideBar } from './_components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'min-h-screen w-full bg-white text-black flex ',
        inter.className
      )}
    >
      <AdminSidebar />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
}
