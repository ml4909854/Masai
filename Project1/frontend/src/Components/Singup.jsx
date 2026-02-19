import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Singup = () => {
     const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    // reset form
  setData({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  
  }

  function handleClick(){
    navigate("/login")
  }
  return (
    <div className="min-h-screen flex justify-center items-start mt-16 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/80 border border-white/40 shadow-2xl rounded-2xl p-10 w-96 space-y-5 transition hover:shadow-blue-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 tracking-wide">
          Create Account
        </h2>

        {/* Name */}
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

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

        {/* Role */}
        <select
          onChange={handleChange}
          name="role"
          value={data.role}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="author">Author</option>
          <option value="reader">Reader</option>
        </select>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold tracking-wide shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-95 transition">
          Register
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span onClick={handleClick} className="text-blue-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>

    </div>
  );
};

export default Singup;
