import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cookies } from 'next/headers';
import Image from 'next/image';

const UserDashboard = async () => {
  // Flat Data
  const token = cookies().get('token')?.value || '';
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXTAUTH_URL}/my-flats`, {
    headers: headers,
    next: {
      tags: ['myFlats'],
    },
  });

  const myFlatsData = await res.json();
  const flats = myFlatsData?.data;

  // Flat Request
  const bookRes = await fetch(`${process.env.NEXTAUTH_URL}/booking-requests`, {
    headers: headers,
    next: {
      tags: ['flatBookingRequests'],
    },
  });

  if (!bookRes.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await bookRes.json();
  const flatRequestsData = data?.data;

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="bg-rose-500 text-rose-50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Flat Data</CardTitle>
            <div className="text-2xl font-bold">{flats?.length}</div>
          </CardHeader>
          <CardContent>
            <p className="text-rose-200">Total number of flat data entries</p>
          </CardContent>
        </Card>
        <Card className="bg-rose-600 text-rose-50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Flat Requests</CardTitle>
            <div className="text-2xl font-bold">{flatRequestsData?.length}</div>
          </CardHeader>
          <CardContent>
            <p className="text-rose-200">Total number of flat data requests</p>
          </CardContent>
        </Card>
      </div>
      {/* Flat Data */}
      <div>
        <h2 className="text-2xl font-bold">Flat Data</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border text-black shadow-sm">
          <Table>
            <TableHeader className="bg-rose-100">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Rent</TableHead>
                <TableHead>Total Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flats?.map((flat: any) => (
                <TableRow key={flat?.id}>
                  <TableCell>
                    <Image
                      src={flat?.flatPhotos[0]}
                      alt="flat image"
                      className="w-20 h-20 object-cover rounded-lg"
                      width={80}
                      height={80}
                    />
                  </TableCell>
                  <TableCell>{flat?.location}</TableCell>
                  <TableCell>${flat?.rent}/month</TableCell>
                  <TableCell>{flat?.totalBedrooms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Flat Request */}
      <div>
        <h2 className="text-2xl font-bold">Flat Requests</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border text-black shadow-sm">
          <Table>
            <TableHeader className="bg-rose-100">
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {flatRequestsData?.map((request: any) => (
                <TableRow key={request?.id}>
                  <TableCell>{request?.flat?.location}</TableCell>
                  <TableCell>{request?.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
