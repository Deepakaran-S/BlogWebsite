import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { div } from "framer-motion/client";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem("token");

      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/login"); 
    }
  }, []);

  return (
    <div>
      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              No blogs created yet.
            </h2>
            <p className="text-gray-500">
              Start writing your first blog post now!
            </p>
            <Link to="/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium shadow-md hover:bg-orange-600 transition"
              >
                Create Blog
              </motion.button>
            </Link>
          </motion.div>{" "}
        </div>
      ) : (
        <div>
          <div className="w-full max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 shadow-sm">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Blogs</h1>
              <p className="text-gray-500 text-sm mt-1">
                Manage and share your stories
              </p>
            </div>
            <Link to="/create">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow transition">
                Create Blog
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link to={`/blog/${blog._id}`} key={blog._id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {blog.content.length > 60
                          ? blog.content.slice(0, 60) + "..."
                          : blog.content}
                      </p>
                      <div className="flex justify-between">
                        <Link to={`/edit/${blog._id}`}>
                          <button className="text-blue-600 hover:underline text-sm">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(
                              `${window.location.origin}/blog/${blog._id}`
                            )
                          }
                          className="text-green-600 hover:underline text-sm"
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
