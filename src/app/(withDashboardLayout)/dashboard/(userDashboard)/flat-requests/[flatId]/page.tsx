import { cookies } from 'next/headers';
import FlatRequestCard from '../../_components/FlatRequestCard';

const FlatRequestPage = async ({ params }: any) => {
  const token = cookies().get('token')?.value || '';
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXTAUTH_URL}/booking-applications`, {
    method: 'POST',
    headers: headers,
    next: {
      tags: ['flatBookingRequests'],
    },
    body: JSON.stringify({
      flatId: params.flatId,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (
    <div>
      <FlatRequestCard
      // flatRequestsData={flatRequestsData}
      />
    </div>
  );
};
export default FlatRequestPage;
