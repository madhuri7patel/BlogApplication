import React, { useEffect, useState } from "react";

const BlogPostPage = ({ postId, onBack }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button onClick={onBack} className="text-blue-500 mb-4">
        Back to home
      </button>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
