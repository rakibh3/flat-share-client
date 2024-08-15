import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { cookies } from 'next/headers';
import Image from 'next/image';

const AdminDashboard = async () => {
  // User Data
  const token = cookies().get('token')?.value || '';
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXTAUTH_URL}/all-users`, {
    headers: headers,
    next: {
      tags: ['users'],
    },
  });

  const usersData = await res.json();
  const users = usersData?.data;

  // Flat Data
  let flatsData = [];
  try {
    const serverUrl = process.env.NEXTAUTH_URL;
    if (!serverUrl) throw new Error('Server URL not found');
    const res = await fetch(`${serverUrl}/flats`, {
      cache: 'no-cache',
      next: {
        tags: ['flats'],
      },
    });
    if (!res.ok) throw new Error('Error fetching flats data');

    flatsData = await res.json();
  } catch (error) {
    console.error('Error fetching flats data:', error);
  }
  const flats = flatsData?.data;

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="bg-rose-500 text-rose-50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Users Data</CardTitle>
            <div className="text-2xl font-bold">{users?.length}</div>
          </CardHeader>
          <CardContent>
            <p className="text-rose-200">Total number of users data entries</p>
          </CardContent>
        </Card>
        <Card className="bg-rose-600 text-rose-50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Flat Data</CardTitle>
            <div className="text-2xl font-bold">{flats?.length}</div>
          </CardHeader>
          <CardContent>
            <p className="text-rose-200">Total number of flat data requests</p>
          </CardContent>
        </Card>
      </div>
      {/* Usres Data */}
      <div>
        <h2 className="text-2xl font-bold">Users Data</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border text-black shadow-sm">
          <Table>
            <TableHeader className="bg-rose-100">
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user: any) => (
                <TableRow key={user?.id}>
                  <TableCell>{user?.username}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.role}</TableCell>
                  <TableCell>{user?.activeStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
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
    </div>
  );
};
export default AdminDashboard;
