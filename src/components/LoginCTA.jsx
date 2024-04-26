import { Link } from "react-router-dom";

export const LoginCTA = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
          <div className="text-center md:text-start">
            <p className="mt-1 text-white font-medium">
              Please Login to your account for book our services
            </p>
          </div>

          <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
            <Link
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              to="/login"
            >
              Login to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
