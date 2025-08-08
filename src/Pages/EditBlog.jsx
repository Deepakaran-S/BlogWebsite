import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
  });

  useEffect(() => {
    
    const fetchBlog = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setFormData({
      title: data.title,
      image: data.image,
      content: data.content,
    });
  } catch (err) {
    console.error("Failed to fetch blog:", err);
  }
};

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    navigate("/dashboard");
  } catch (err) {
    console.error("Update failed:", err);
  }
};


  const handleDelete = async () => {
  try {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/dashboard");
  } catch (err) {
    console.error("Delete failed:", err);
  }
};


  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition duration-200"
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Blog</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-3 border border-gray-300 rounded"
          
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your content here..."
          rows={6}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Update
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600"
          >
            Delete
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default EditBlog;
