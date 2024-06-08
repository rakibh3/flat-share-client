'use client';
import { updateEmailORUsername } from '@/app/(withDashboardLayout)/dashboard/(userDashboard)/userAction/userAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/AuthProvider';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: user?.username || '',
      email: user?.email || '',
    },
  });

  const onSubmit = async (data: any) => {
    const res = await updateEmailORUsername(data);
    console.log(res);
  };

  return (
    <div className="container mx-auto max-w-md py-12 mt-32">
      <div className="space-y-4 min-h-96">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Update your username and email address.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              defaultValue={user?.username}
              {...register('username', { required: 'Username is required' })}
            />
          </div>
          <div>
            {errors.username && (
              <p className="text-rose-500 text-xs mt-2">
                {String(errors.username.message)}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user?.email}
              {...register('email', { required: 'Email is required' })}
            />
          </div>
          <div>
            {errors.email && (
              <p className="text-rose-500 text-xs mt-2">
                {String(errors.email.message)}
              </p>
            )}
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
