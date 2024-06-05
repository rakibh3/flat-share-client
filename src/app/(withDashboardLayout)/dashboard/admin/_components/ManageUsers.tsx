'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useFormState } from 'react-dom';
import { updateUser } from '../adminAction/AdminAction';
import toast from 'react-hot-toast';

const ManageUsersPage = ({ usersData }: any) => {
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState(usersData);

  const [state, formAction] = useFormState(updateUser.bind(null, userId), null);

  const handleUserRoleChange = (userId: any, newRole: any) => {
    setUsers((prevUsers: any) =>
      prevUsers.map((user: any) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
    setUserId(userId);

    const formData = new FormData();
    formData.append('role', newRole);
    formAction(formData);
  };
  const handleUserStatusChange = async (userId: any, newStatus: any) => {
    setUsers((prevUsers: any) =>
      prevUsers.map((user: any) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );

    setUserId(userId);
    console.log(userId, newStatus);
    const formData = new FormData();
    formData.append('activeStatus', newStatus);

    await formAction(formData);
  };

  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message);
    } else if (state?.success === false) {
      toast.error(state?.message);
    }
    console.log(state);
  }, [state]);

  return (
    <div className="flex flex-col gap-8">
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Select
                    value={user.role}
                    onValueChange={(newRole) =>
                      handleUserRoleChange(user.id, newRole)
                    }
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USER">User</SelectItem>
                      <SelectItem value="ADMIN">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    value={user.activeStatus}
                    onValueChange={(newStatus) =>
                      handleUserStatusChange(user.id, newStatus)
                    }
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACTIVE">Active</SelectItem>
                      <SelectItem value="INACTIVE">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default ManageUsersPage;
