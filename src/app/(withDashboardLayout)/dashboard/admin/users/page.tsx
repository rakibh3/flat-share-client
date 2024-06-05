import { cookies } from 'next/headers';
import ManageUsersPage from '../_components/ManageUsers';

const UsersPage = async () => {
  const token = cookies().get('token')?.value as string;
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-users`, {
    headers: headers,
    next: {
      tags: ['users'],
    },
  });

  const usersData = await res.json();

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold text-center mb-8">Users</h1>
      <ManageUsersPage usersData={usersData?.data} />
    </div>
  );
};
export default UsersPage;
