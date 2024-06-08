'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/AuthProvider';

const EditProfile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto max-w-md py-12 mt-32">
      <div className="space-y-4 min-h-96">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Update your username and email address.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue={user?.username} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user?.email} />
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};
export default EditProfile;
