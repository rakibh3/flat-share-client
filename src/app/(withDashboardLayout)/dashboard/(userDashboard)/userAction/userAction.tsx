'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const updateMyFlat = async (
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
    };

    const formattedData = JSON.stringify(newFormData);

    const token = cookies().get('token')?.value || '';
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    const res = await fetch(`${process.env.NEXTAUTH_URL}/flats/${flatId}`, {
      method: 'PUT',
      headers: headers,
      body: formattedData,
    });

    const data = await res.json();
    revalidateTag('myFlats');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyFlat = async (flatId: string) => {
  try {
    const token = cookies().get('token')?.value || '';
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    const res = await fetch(`${process.env.NEXTAUTH_URL}/flats/${flatId}`, {
      method: 'DELETE',
      headers: headers,
    });
    if (res.ok) {
      revalidateTag('myFlats');
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

export const addNewFlat = async (data: any) => {
  const token = cookies().get('token')?.value || '';
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXTAUTH_URL}/flats`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
  const flatData = await res.json();
  revalidateTag('myFlats');
  return flatData;
};
