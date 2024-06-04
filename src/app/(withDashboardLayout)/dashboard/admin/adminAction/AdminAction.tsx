'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const updateFlat = async (
  flatId: string,
  pre: FormData,
  formData: FormData
) => {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      rent: Number(Object?.fromEntries(formData).rent),
      totalBedrooms: Number(Object?.fromEntries(formData).totalBedrooms),
      totalRooms: Number(Object?.fromEntries(formData).totalRooms),
      squareFeet: Number(Object?.fromEntries(formData).squareFeet),
      advanceAmount: Number(Object?.fromEntries(formData).advanceAmount),
    };

    const formattedData = JSON.stringify(newFormData);

    const token = cookies().get('token')?.value as string;
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/flats/${flatId}`,
      {
        method: 'PUT',
        headers: headers,
        body: formattedData,
      }
    );

    const data = await res.json();
    revalidateTag('flats');
    return data;
  } catch (error) {
    console.error(error);
  }
};
