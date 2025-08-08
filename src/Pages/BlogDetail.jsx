import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading blog...</div>;
  if (!blog) return <div className="text-center p-10 text-red-500">Blog not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition duration-200"
      >
        ← Back
      </button>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-2 text-gray-800">{blog.title}</h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">{new Date(blog.date).toDateString()}</p>

      {/* Blog Content */}
      <article className="text-lg leading-8 text-gray-700 whitespace-pre-line">
        {blog.content}
      </article>
    </div>
  );
};

export default BlogDetail;
