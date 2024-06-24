import React, { useState } from "react";

const CreateBlogPostPage = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    //console.log("title")
  
    fetch("https://api.example.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}: Network response was not ok`);
      }
      return response.json();
    })
    .then((data) => {
      onSubmit(data);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error.message);
     
      if (error.message.includes("Failed to fetch")) {
        alert("Network error: Please check your internet connection and try again.");
      } else {
        alert("Error: " + error.message);
      }
    });
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
        />
        </div>

        <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded">
            Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPostPage;
