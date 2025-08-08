import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errData = await res.json();
      alert(errData.msg || "Login failed");
      return;
    }

    const data = await res.json();
    localStorage.setItem("token", data.token); 
    navigate("/dashboard"); 
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong. Try again.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#c0392b]">
      <div className="w-full max-w-md   p-6 rounded-xl shadow-lg">
        <Link to="/" className="flex items-center gap-2 mb-4 text-sm text-white hover:text-black">
          
         ←  Back
        </Link>

        <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-white hover:underline cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
