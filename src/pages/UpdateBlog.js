import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/common";

export default function UpdateBlog() {
  const { bookId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
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
      const authorId = localStorage.getItem("id");
      if (!authorId) {
        alert("Please login first");
      }
      setAuthor(authorId);
      const response = await axios.put(`${url}/blogs/${bookId}`, {
        title,
        body,
        author: authorId,
      });
      console.log("Blog updated successfully", response.data);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsError(true);
      setError(
        err.response?.data?.message ||
          "Blog updation failed !. Please try again."
      );
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md my-5">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Blog!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">body</label>
            <textarea
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Author</label>
            <input
              type="email"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            {!isLoading ? "Update Blog" : "Loading..."}
          </button>
          <div className="text-center hover:underline">
            <Link to="/">Go to Home</Link>
          </div>
          {isError && <div className="text-center text-red-700 ">{error}</div>}
        </form>
      </div>
    </div>
  );
}
