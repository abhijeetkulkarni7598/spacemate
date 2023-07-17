import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import BlogCont from "../containers/blog/BlogCont";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogCont />
      <Footer />
    </div>
  );
};

export default Blog;
