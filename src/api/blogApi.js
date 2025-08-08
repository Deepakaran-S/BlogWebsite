const BASE_URL = "http://localhost:5000/api/blogs";

const getToken = () => localStorage.getItem("token");

export const fetchBlogs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const fetchBlogById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createBlog = async (blogData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(blogData),
  });
  return res.json();
};

export const updateBlog = async (id, blogData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(blogData),
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
};
