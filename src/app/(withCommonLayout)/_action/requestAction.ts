'use server';

import { cookies } from 'next/headers';

export const createFlatRequest = async (flatId: string) => {
  try {
    const token = cookies().get('token')?.value || '';
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/booking-applications`,
      {
        method: 'POST',
        headers: headers,
        // next: {
        //   tags: ['flatBookingRequests'],
        // },
        body: JSON.stringify({
          flatId: flatId,
        }),
      }
    );

    if (res.ok) return true;
    return false;
  } catch (error) {
    console.error(error);
  }
};
