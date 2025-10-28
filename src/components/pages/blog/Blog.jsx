import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario"); // Default author
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    // In a real app, you would send this to your server
    // For now, we'll just log it and navigate home
    console.log("New blog submitted:", blog);

    // Example of a POST request
    fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      // Navigate back to the home page after submission
      navigate("/");
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Blog Title:
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Blog Body:
          </label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 h-32"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Blog Author:
          </label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          ></input>
        </div>
        <div>
          {!isPending && (
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Add Blog
            </button>
          )}
          {isPending && (
            <button
              disabled
              className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded-md cursor-not-allowed"
            >
              Adding Blog...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Blog;
