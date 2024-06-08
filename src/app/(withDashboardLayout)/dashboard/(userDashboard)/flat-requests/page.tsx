import { cookies } from 'next/headers';
import FlatRequestCard from '../_components/FlatRequestCard';

const FlatRequestPage = async () => {
  const token = cookies().get('token')?.value || '';
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXTAUTH_URL}/booking-requests`, {
    headers: headers,
    next: {
      tags: ['flatBookingRequests'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const flatRequestsData = data?.data;

  return (
    <div>
      <FlatRequestCard flatRequestsData={flatRequestsData} />
    </div>
  );
};
export default FlatRequestPage;
