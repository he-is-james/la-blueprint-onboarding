import React from 'react';
import './App.css';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';

const App = function () {
  return (
    <>
      <CreatePost />
      <PostsDisplay />
    </>
  );
};

export default App;
