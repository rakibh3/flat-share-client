'use server';

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

export const registerUser = async (pre: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formattedData,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (pre: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formattedData,
      // credentials: 'include',
    });

    const data = await res.json();

    if (data?.success) {
      cookies().set('token', data?.data.token);
      // cookies().set('refreshToken', data?.data.refreshToken);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const userInfo = async () => {
  try {
    const token = cookies().get('token')?.value;
    let decodedData = null;

    if (token) {
      decodedData = jwtDecode(token) as any;
      return {
        id: decodedData.id,
        email: decodedData?.email,
        role: decodedData?.role,
      };
    } else return null;
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = async () => {
  try {
    cookies().delete('token');
    // cookies().delete('refreshToken');
  } catch (error) {
    console.error(error);
  }
};
