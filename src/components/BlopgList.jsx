import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

const BlogList = ({ title, blogs, onDelete }) => {
  // `onDelete` is a prop we’ll pass from Home.jsx
  return (
    <div className="relative p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 pb-2 border-b-2 border-gray-300 dark:border-gray-700">
        {title}
      </h2>

      {/* ✅ If there are no blogs */}
      {!blogs || blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            No blogs found yet.
          </p>
          <Link
            to="/blog"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition-colors"
          >
            <PlusCircleIcon className="w-6 h-6" />
            <span>Add New Blog</span>
          </Link>
        </div>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex justify-between items-start"
          >
            <div>
              <Link to={`/info/${blog.id}`}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Written by {blog.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {blog.description || blog.body?.slice(0, 100) + "..."}
                </p>
              </Link>
            </div>

            {/* ✅ Delete Button */}
            <button
              onClick={() => onDelete(blog.id)}
              className="ml-4 text-red-600 hover:text-red-400 transition-colors"
              title="Delete Blog"
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        ))
      )}

      {/* ✅ Floating Add Blog Button — always visible */}
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
