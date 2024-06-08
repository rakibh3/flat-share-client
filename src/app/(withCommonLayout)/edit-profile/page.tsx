'use client';
import {
  getMyProfile,
  updateEmailORUsername,
} from '@/app/(withDashboardLayout)/dashboard/(userDashboard)/userAction/userAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { logoutUser } from '../_action/authAction';
import { useRouter } from 'next/navigation';
import Spinner from '../_components/shared/Spinner';
import { useEffect, useState } from 'react';

const EditProfile = () => {
  const { setUser } = useAuth();
  const [profile, setProfile] = useState({});
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      // @ts-ignore
      username: profile?.username || '',
      // @ts-ignore
      email: profile?.email || '',
    },
  });

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getMyProfile();
        setProfile(res?.data);
        reset({
          username: res?.data?.username || '',
          email: res?.data?.email || '',
        });
      } catch (error) {
        console.error(error);
      }
    };
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: any) => {
    const res = await updateEmailORUsername(data);

    if (res?.success) {
      toast.success(res?.message);
      await logoutUser();
      setUser(null);
      router.push('/login');
    } else toast.error(res?.message);
  };

  if (!profile) {
    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

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
              type="text"
              //@ts-ignore
              defaultValue={profile?.username}
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
              //@ts-ignore
              defaultValue={profile?.email}
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
          <Button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className="w-full"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};
export default EditProfile;
