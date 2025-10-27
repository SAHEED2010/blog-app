import React, { useState } from "react";
import BlogList from "./BlopgList";
import UseFetch from "./hooks/UseFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    setData: setBlogs, // Fetch all blogs from the API endpoint
  } = UseFetch("https://mocki.io/v1/cd58a8f0-f5d1-4287-8c16-5a37ca1832b8");

  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs by title (existing logic remains)
  console.log("DEBUG: blogs value:", blogs, "Is array:", Array.isArray(blogs));
  const filteredBlogs =
    Array.isArray(blogs) ? blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Delete handler
  const handleDelete = async (id) => {
    await fetch(
      `https://mocki.io/v1/cd58a8f0-f5d1-4287-8c16-5a37ca1832b8/${id}`,
      {
        method: "DELETE",
      }
    ); // Correctly construct the URL for deleting a blog
    setBlogs((prevBlogs) =>
      Array.isArray(prevBlogs) ? prevBlogs.filter((blog) => blog.id !== id) : []
    );
  };

  return (
    <div className="p-6">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search blogs by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 mb-6 border rounded-lg shadow-sm dark:bg-gray-800 dark:text-white"
      />

      {isPending && <div>Loading...</div>}

      {blogs && (
        <BlogList
          blogs={filteredBlogs}
          title="All Blogs"
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
