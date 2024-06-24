
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPostPage from './components/BlogPostPage';
import CreateBlogPostPage from './components/CreateBlogPostPage';

function App() {
  const navigate = useNavigate();
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    navigate(`/posts/${postId}`);
  }

  const handleNewPostSubmit = (newPost) => {
    navigate('/');
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onPostClick={handlePostClick} />} />
      <Route path="/posts/:postId" element={<BlogPostPage postId={selectedPostId} onBack={() => navigate('/')} />} />
      <Route path="/create" element={<CreateBlogPostPage onSubmit={handleNewPostSubmit} />} />
    </Routes>
  );
}

export default App;















// import React,{useState} from 'react';
// import {BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom'
// import HomePage from './components/HomePage';
// import BlogPostPage from './components/BlogPostPage';
// import CreateBlogPostPage from './components/CreateBlogPostPage';


// function App() {
//   const navigate = useNavigate();
//   const [selectedPostId, setSelectedPostId] = useState(null);

// const handlePostClick =(postId)=>{
//   setSelectedPostId(postId);
//   navigate(`/posts/${postId}`);
// }

// const handleNewPostSubmit =(newPost)=>{
//   navigate('/');
// }

//   return (
//   <Router>
//     <Routes>
//       <Route path="/" element={<HomePage onPostClick={handlePostClick} />} />
//       <Route path="/posts/:postId" element={<BlogPostPage postId={selectedPostId} onBack={()=>navigate('/')} />} />
//       <Route path="/create" element={<CreateBlogPostPage onSubmit={handleNewPostSubmit} />} />
//     </Routes>
//   </Router>
//   );
// }

// export default App;
