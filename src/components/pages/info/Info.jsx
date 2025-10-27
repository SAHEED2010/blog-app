import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";

const Info = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: blog, isPending } = UseFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
        navigate("/");
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 flex flex-col items-center justify-center px-6">
      {isPending && <div>Loading...</div>}
      {blog && (
        <div className="max-w-2xl w-full bg-gray-200 dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Written by {blog.author}
          </p>
          <p className="mb-6">{blog.body}</p>

          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-colors"
            onClick={(e) => handleDelete(e, blog.id)}
          >
            Delete
          </button>
          <Link to="/">
            <h2>Go home</h2>
          </Link>
        </div>
      )}

      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
            ✅ Blog Deleted!
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
