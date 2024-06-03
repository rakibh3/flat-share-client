'use client';

import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { loginUser } from '../_action/authAction';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Spinner from '../_components/shared/Spinner';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, null);
  const prevStateRef = useRef(state);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    formAction(formData);
  };

  useEffect(() => {
    if (prevStateRef.current !== state) {
      if (state && state.success) {
        toast.success('Logged In Successfully!');
        router.push('/');
      } else {
        toast.error(state?.message, { duration: 8000 });
      }
    }
    prevStateRef.current = state;
  }, [state, router]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-4">
          <input
            {...register('email', { required: 'Email Address is required' })}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
        </div>
        <div>
          {errors.email && (
            <p className="text-rose-500 text-xs mt-2">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        <div className="w-full mt-4">
          <input
            {...register('password', { required: 'Password is required' })}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>

        <div>
          {errors.password && (
            <p className="text-rose-500 text-xs mt-2">
              {String(errors.password.message)}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
          >
            Forget Password?
          </a>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50"
          >
            {isSubmitting ? <Spinner /> : 'Login'}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
