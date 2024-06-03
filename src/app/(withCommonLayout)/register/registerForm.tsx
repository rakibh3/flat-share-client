'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { registerUser } from '../_action/authAction';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { SingleImageDropzone } from '@/components/SingleImageDropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Spinner from '../_components/shared/Spinner';
import { useRouter } from 'next/navigation';

const validationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, 'Name must be at least 3 characters')
    .max(20),
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(4, 'Username must be at least 4 characters')
    .max(20),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Enter a valid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

const RegisterFormPage = () => {
  const [state, formAction] = useFormState(registerUser, null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const prevStateRef = useRef(state);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(password === newConfirmPassword);
  };

  const onSubmit = async (data: any) => {
    const { username, email, password } = data;

    if (!passwordMatch) {
      toast.error('Passwords do not match');
      return;
    }

    let fileUrl = '';
    if (file) {
      const res = await edgestore.publicFiles.upload({ file });

      fileUrl = res.url;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profilePhoto', fileUrl);

    formAction(formData);
  };

  useEffect(() => {
    if (prevStateRef.current !== state) {
      if (state && state.success) {
        toast.success('Successfully Registered You Can Login Now!', {
          duration: 8000,
        });
        router.push('/login');
      } else {
        toast.error(state?.message, { duration: 8000 });
      }
    }
    prevStateRef.current = state;
  }, [state, router]);

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center mt-6">
        <span className="w-1/2 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-rose-500 dark:border-rose-400 dark:text-white">
          sign up
        </span>
      </div>

      {/* Name */}
      <div className="relative flex items-center mt-8">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder="Your Name"
          {...register('name')}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <span>
        {errors.name && (
          <p className="text-rose-500 text-xs mt-2">
            {String(errors.name.message)}
          </p>
        )}
      </span>

      {/* Username */}
      <div className="relative flex items-center mt-8">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder="Username"
          {...register('username')}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <span>
        {errors.username && (
          <p className="text-rose-500 text-xs mt-2">
            {String(errors.username.message)}
          </p>
        )}
      </span>

      {/* Profile Photo */}
      <div className="relative flex items-center mt-8 justify-center">
        <SingleImageDropzone
          width={100}
          height={100}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
        />
      </div>

      {/* Email */}
      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        <input
          type="email"
          placeholder="Email address"
          {...register('email')}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        {errors.email && (
          <p className="text-rose-500 text-xs mt-2">
            {String(errors.email.message)}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          value={password}
          onChange={handlePasswordChange}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        {password.length < 6 && errors.password && (
          <p className="text-rose-500 text-xs mt-2">
            {String(errors.password.message)}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        {!passwordMatch && (
          <p className="text-rose-500 text-xs mt-2">
            Passwords don&apos;t match
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50"
        >
          {isSubmitting ? <Spinner /> : 'Sign Up'}
        </Button>

        <div className="mt-6 text-center ">
          <Link
            href="/login"
            className="text-sm text-rose-500 hover:underline dark:text-rose-400"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </form>
  );
};
export default RegisterFormPage;
