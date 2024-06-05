'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { changePasword } from '../_action/authAction';
import Spinner from './shared/Spinner';

const ChangePassword = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [password, setPassword] = useState('');
  const [state, formAction] = useFormState(changePasword, null);
  const router = useRouter();
  const prevStateRef = useRef(state);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

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

  const onSubmit = (data: any) => {
    const { oldPassword, password: newPassword } = data;

    const formData = new FormData();
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    formAction(formData);
  };

  useEffect(() => {
    if (prevStateRef.current !== state) {
      if (state && state.success) {
        toast.success(state?.message, {
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
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center mt-12 px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/2 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-rose-500 dark:border-rose-400 dark:text-white"
            >
              Change Password
            </a>
          </div>

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
              {...register('oldPassword', {
                required: 'Old Password is required.',
              })}
              type="password"
              className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Old Password"
            />
          </div>
          <div>
            {errors.oldPassword && (
              <p className="text-rose-500 text-xs mt-2">
                {String(errors.oldPassword.message)}
              </p>
            )}
          </div>

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
              {...register('password', {
                required: 'New Password is required.',
              })}
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="New Password"
            />
          </div>
          <div>
            {errors.newPassword && (
              <p className="text-rose-500 text-xs mt-2">
                {String(errors.newPassword.message)}
              </p>
            )}
          </div>

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
              {...register('confirmPassword')}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm New Password"
            />
          </div>
          <div>
            {!passwordMatch && (
              <p className="text-rose-500 text-xs mt-2">
                Passwords don&apos;t match
              </p>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting || !passwordMatch}
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50"
            >
              {isSubmitting ? <Spinner /> : 'Change Password'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ChangePassword;
