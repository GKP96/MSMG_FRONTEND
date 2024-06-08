import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import DeleteBlog from "./pages/DeleteBlog";
import NotFound from "./pages/NotFound";

function App() {
  const isLoggedIn = () => {
    const id = localStorage.getItem("id");
    return id !== undefined || id !== null;
  };
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route
            path="/create"
            element={isLoggedIn() ? <CreateBlog /> : <Navigate to="/login" />}
          />
          <Route
            path="/update/:bookId"
            element={isLoggedIn() ? <UpdateBlog /> : <Navigate to="/login" />}
          />
          <Route
            path="/delete/:bookId"
            element={isLoggedIn() ? <DeleteBlog /> : <Navigate to="/login" />}
          />
      </Routes>
    </div>
  );
}

export default App;
