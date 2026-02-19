import Blogs from "./Components/Blogs";
import CreateBlog from "./Components/CreateBlog";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "./Components/Singup";
import PrivateRoute from "./Components/PrivateRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
