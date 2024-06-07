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

  const flatRequestsData = await res.json();
  return (
    <div>
      <FlatRequestCard flatRequestsData={flatRequestsData} />
    </div>
  );
};
export default FlatRequestPage;
