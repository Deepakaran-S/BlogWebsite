import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const whiteBgRoutes = ["/dashboard", "/create"];
  const isWhiteBg =
    whiteBgRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/edit");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`flex justify-between items-center px-6 py-3 shadow-md ${
        isWhiteBg ? "bg-white" : "bg-[#c0392b]"
      }`}
    >
      <div
        className={`text-2xl font-bold cursor-pointer ${
          isWhiteBg ? "text-black" : "text-white"
        }`}
        onClick={() => navigate("/")}
      >
        BlogSpace
      </div>

      <div className="flex gap-4">
        {!token ? (
          <>
            <button
              onClick={() => navigate("/register")}
              className={`border-2 px-4 py-1 rounded-md ${
                isWhiteBg
                  ? "border-orange-500 text-orange-500"
                  : "border-white text-white"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className={`px-4 py-1 rounded-md ${
                isWhiteBg
                  ? "bg-orange-500 text-white"
                  : "bg-orange-500 text-white"    
              }`}
            >
              Login
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className={`px-4 py-1 rounded-md ${
              isWhiteBg
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500"
            }`}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
