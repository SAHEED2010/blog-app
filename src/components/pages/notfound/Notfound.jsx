import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)] bg-gray-50 dark:bg-gray-900 text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400">
        404
      </h1>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
        Page Not Found
      </h2>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
