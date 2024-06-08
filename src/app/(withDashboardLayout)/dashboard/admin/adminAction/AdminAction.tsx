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
    revalidateTag('flats');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFlat = async (flatId: string) => {
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
      revalidateTag('flats');
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (
  userId: string,
  updatePayload: Partial<{ role: string; activeStatus: string }>
) => {
  try {
    const token = cookies().get('token')?.value || '';
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/manager-user/${userId}`,
      {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(updatePayload),
      }
    );
    const data = await res.json();
    revalidateTag('users');
    return data;
  } catch (error) {
    console.error(error);
  }
};
