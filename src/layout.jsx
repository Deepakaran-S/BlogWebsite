import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/dashboard";
import Create from "./Pages/Create";
import EditBlog from "./Pages/EditBlog";
import BlogDetail from "./Pages/BlogDetail";


const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<EditBlog />} />
       <Route path="/blog/:id" element={<BlogDetail />} />


    </Routes>
  );
};

export default Layout;
