import { cookies } from 'next/headers';
import FlatCard from '../_components/flatCard';

const MyFlatsPage = async () => {
  const token = cookies().get('token')?.value as string;
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-flats`, {
    headers: headers,
    next: {
      tags: ['myFlats'],
    },
  });

  const myFlatsData = await res.json();

  return (
    <div>
      <FlatCard myFlatsData={myFlatsData?.data} />
    </div>
  );
};
export default MyFlatsPage;
