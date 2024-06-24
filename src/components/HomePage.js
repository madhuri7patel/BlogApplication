
import React, { useEffect, useState } from "react";

const HomePage = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body.substring(0, 100) + "..."}</p> 

          <button
            className="mt-2 text-blue-500"
            onClick={() => onPostClick(post.id)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;






// import React, { useEffect, useState } from "react";

// const HomePage = ({ onPostClick }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Blog Posta</h1>
//       {posts.map((post) => (
//         <div key={post.id} className="mb-4">
//           <h2 className="text-xl font-semibold">{post.title}</h2>
//           <p>{post.excerpt}</p>

//           <button
//             className="mt-2 text-blue-500"
//             onClick={() => onPostClick(id)}
//           >
//             Read More
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomePage;
