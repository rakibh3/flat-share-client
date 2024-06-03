import Link from 'next/link';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login your account
          </p>

          <LoginForm />
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Dont have an account?{' '}
          </span>
          <Link
            href="/register"
            className="mx-2 text-sm font-bold text-rose-500 dark:text-rose-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
