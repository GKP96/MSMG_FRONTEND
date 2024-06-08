import React from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  return <div className=""></div>;
}
export default function Navbar() {
  const logoutHandler = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.reload();
  };
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  return (
    <div>
      <div className="w-full h-12 bg-slate-400 flex items-center justify-between">
        <h1 className="text-white px-5 text-xl font-bold">Blog App</h1>
        {id ? (
          <p
          className="text-white px-10 py-3  hover:underline cursor-pointer"
          onClick={logoutHandler}
        >
          Logout
        </p>
        ) : (
          <p
            className="text-white px-10 py-3  hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </p>
        )}
      </div>
    </div>
  );
}
