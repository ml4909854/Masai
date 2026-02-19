import React, { useState } from "react";

const CreateBlog = () => {

  const initialState = {
    title: "",
    content: ""
  };

  const [blog, setBlog] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(blog);

    // reset form after submit
    setBlog(initialState);
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 bg-gradient-to-br from-blue-100 via-white to-blue-200">

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/80 border border-white/40 shadow-2xl rounded-2xl p-10 w-[500px] space-y-6 transition hover:shadow-blue-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Create Blog
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Content */}
        <textarea
          name="content"
          value={blog.content}
          onChange={handleChange}
          placeholder="Write your blog content..."
          rows="6"
          className="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        ></textarea>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-95 transition">
          Publish Blog
        </button>

      </form>
    </div>
  );
};

export default CreateBlog;
