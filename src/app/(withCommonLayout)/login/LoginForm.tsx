import { Button } from '@/components/ui/button';

const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
        </div>

        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
          >
            Forget Password?
          </a>

          <Button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
