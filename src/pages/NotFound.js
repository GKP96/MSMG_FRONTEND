// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-lg text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
