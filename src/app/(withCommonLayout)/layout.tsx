import type { Metadata } from 'next';
import FooterPage from './_components/shared/footer';
import Navbar from './_components/shared/Navbar';
import { userInfo } from './_action/authAction';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Flat Shares',
  description: 'Generated by create next app',
};

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInfo();

  return (
    <div className="mx-auto md:container">
      <Navbar user={user} />
      {children}
      <FooterPage />
    </div>
  );
}
