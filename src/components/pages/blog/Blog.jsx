import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [showPopUp, setShowpopUp] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Lisa");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = { title, body, author };

    setIsPending(true);
    console.log(blogs);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogs),
    }).then(() => {
      setShowpopUp(true);
      setTimeout(() => setShowpopUp(false), 200);
      setTitle("");
      setBody("");
      setAuthor("Lisa");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add a new Blog
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="blog-title"
          >
            Blog title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="blog-title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="blog-body"
          >
            Blog body
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="blog-body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="blog-author"
          >
            Blog author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="blog-author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            
          </input>
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Adding Blog..." : "Add Blog"}
        </button>
        {showPopUp && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg animate-bounce">
            ✅ Successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default Blog;
