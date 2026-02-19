import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: ""
  };

  const [data, setData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    // reset form
    setData(initialState);

    // redirect after login
    navigate("/");
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 bg-gradient-to-br from-blue-100 via-white to-blue-200">

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/80 border border-white/40 shadow-2xl rounded-2xl p-10 w-96 space-y-5 transition hover:shadow-blue-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 tracking-wide">
          Login
        </h2>

        {/* Email */}
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Password */}
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold tracking-wide shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-95 transition">
          Login
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;
