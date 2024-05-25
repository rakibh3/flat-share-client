'use server';

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
