'use client';

import { use, useEffect, useState } from 'react';
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
  const [users, setUsers] = useState(usersData);

  const handleUserRoleChange = async (userId: any, newRole: any) => {
    setUsers((prevUsers: any) =>
      prevUsers?.map((user: any) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );

    const res = await updateUser(userId, { role: newRole });
    if (res?.success) {
      toast.success('User role updated successfully');
    } else {
      toast.error('User role update failed');
    }
  };

  const handleUserStatusChange = async (userId: any, newStatus: any) => {
    setUsers((prevUsers: any) =>
      prevUsers?.map((user: any) =>
        user.id === userId ? { ...user, activeStatus: newStatus } : user
      )
    );

    const res = await updateUser(userId, { activeStatus: newStatus });

    if (res?.success) {
      toast.success('User status updated successfully');
    } else {
      toast.error('User status update failed');
    }
  };

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
            {users?.map((user: any) => (
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
