import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import BlogCont from "../containers/blog/BlogCont";
import WhatsApp from "../components/common/WhatsApp";
import PhoneCall from "../components/common/PhoneCall";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogCont />
      <Footer />
      <PhoneCall/>
        <WhatsApp/>
    </div>
  );
};

export default Blog;
