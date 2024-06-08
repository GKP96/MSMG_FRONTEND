import React, { useState } from "react";
import axios from "axios";
import { url } from "../utils/common";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const DeleteBlog = () => {
  const { bookId } = useParams();
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsLoading(true);
    setIsError(false);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.delete(`${url}/blogs/${bookId}`);
      console.log("Delete successful:", response.data);
      setSuccess(true);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsError(true);
      setError(
        err.response?.data?.message || "Delete failed. Please try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-6 text-center">Are you sure, you want to delete it ?</h1>
        {isError && <div className="mb-4 text-red-500">{error}</div>}
        {success && (
          <div className="mb-4 text-green-500">Blogs deleted successfully.</div>
        )}
        <button
          onClick={handleDelete}
          className="w-full bg-red-500 text-white py-2 rounded-md cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete Blog"}
        </button>
        <div className="text-center"><Link to="/">Go Home</Link></div>
      </div>
    </div>
  );
};

export default DeleteBlog;
