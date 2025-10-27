import React, { useState } from "react";
import BlogList from "./BlopgList";
import UseFetch from "./hooks/UseFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    setData: setBlogs,
  } = UseFetch("/data/db.json");

  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs by title
  const filteredBlogs =
    blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Delete handler
  const handleDelete = async (id) => {
    await fetch(`/data/db.json${id}`, { method: "DELETE" });
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
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
