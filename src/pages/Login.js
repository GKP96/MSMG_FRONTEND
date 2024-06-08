import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../utils/common";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setError("");

    try {
      const response = await axios.post(`${url}/auth/signin`, {
        email,
        password,
      });
      const { token, _id } = response.data.data;
      const resEmail = response.data.data.email;
      localStorage.setItem("token", token);
      localStorage.setItem("id", _id);
      localStorage.setItem("email", resEmail);
      setIsLoading(false);
      console.log(response);
      navigate("/");
    } catch (err) {
      setIsError(true);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md my-5">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            {isLoading ? "Loading ..." : "Login"}
          </button>
          {!isLoading && (
            <div className="text-center">
              <Link to="/signup">Don't have an account | Signup</Link>
            </div>
          )}
          {isError && <div className="text-center text-red-700 ">{error}</div>}
          <div className="text-center"><Link to="/">Go To Home</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
