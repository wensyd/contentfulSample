import React, { useEffect, useState } from "react";
import "./styles.css";
import useContentful from "./useContentful";
import BlogCard from "./blogCards";

const App = () => {
  const [blogPost, setBlogPost] = useState([]);
  const { getBlogPost } = useContentful();

  useEffect(() => {
    getBlogPost().then((response) => setBlogPost(response));
  });

  return (
    <div className="App">
      <header>
      <h1>Contentful Sample</h1>
      <p>this is a sample site so that I can add more info to it</p>
      </header>
      {blogPost.map((blogPost, index) => (
        <BlogCard key={index} blogPost={blogPost} />
      ))}
    </div>
  );
};

export default App;
