'use server';

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

export const registerUser = async (pre: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch(`${process.env.NEXTAUTH_URL}/register`, {
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

    const res = await fetch(`${process.env.NEXTAUTH_URL}/login`, {
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
    const token = cookies().get('token')?.value as string;
    let decodedData = null;

    if (token) {
      decodedData = jwtDecode(token) as any;
      return {
        id: decodedData.id,
        email: decodedData?.email,
        role: decodedData?.role,
        username: decodedData?.username,
      };
    } else return null;
  } catch (error) {
    console.error(error);
  }
};

export const changePasword = async (pre: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    const token = cookies().get('token')?.value || '';
    const headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    const res = await fetch(`${process.env.NEXTAUTH_URL}/change-password`, {
      method: 'POST',
      headers: headers,
      body: formattedData,
    });

    const data = await res.json();
    return data;
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
