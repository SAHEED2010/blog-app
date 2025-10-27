import React from "react";
import { Link } from "react-router-dom";
import {
  PlusCircleIcon,
  TrashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const BlogList = ({ title, blogs, onDelete }) => {
  return (
    <div className="relative p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 pb-2 border-b-2 border-gray-300 dark:border-gray-700">
        {title}
      </h2>

      {!blogs || blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center animate-fadeIn">
          <DocumentTextIcon className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-xl mb-4">
            No blogs found yet.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mb-6">
            Why not be the first to create one?
          </p>
          <Link
            to="/blog"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <PlusCircleIcon className="w-6 h-6" />
            <span>Add New Blog</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <Link to={`/info/${blog.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Written by {blog.author}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {blog.description || blog.body?.slice(0, 100) + "..."}
                    </p>
                  </Link>
                </div>

                <button
                  onClick={() => onDelete(blog.id)}
                  className="ml-4 p-2 rounded-full text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  title="Delete Blog"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/blog"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        title="Add New Blog"
      >
        <PlusCircleIcon className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default BlogList;
