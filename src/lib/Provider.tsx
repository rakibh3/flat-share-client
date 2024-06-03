'use client';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './AuthProvider';
import { EdgeStoreProvider } from '@/lib/edgestore';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EdgeStoreProvider>
      <Toaster position="top-center" />
      <AuthProvider>{children}</AuthProvider>
    </EdgeStoreProvider>
  );
};
