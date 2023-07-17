import React, { useEffect, useState } from "react";
import { BlogStyle } from "./Blog.style";
import useFetch from "./useFetch";
// import {GoArrowRight} from 'react-icons/go'

const BlogCont = () => {
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs');

  

  return (
    <>
      <BlogStyle>
        <main className="blog-container">
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loader">Loading</div>}
          {blog &&
            blog.map((curElem) => {
              const { id, title, body } = curElem;
              return (
                <div className="blog-card" key={id}>
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                      }}></div>
                    <ul className="details">
                      <li className="author">
                        <a href="#">John Doe</a>
                      </li>
                      <li className="date">Aug. 24, 2015</li>
                      <li className="tags-blog">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">Code</a>
                          </li>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="description">
                    <h1>{title}</h1>
                    <h2>Opening a door to the future</h2>
                    <p>{body.substring(0, 250)}</p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              );
            })}
        </main>
      </BlogStyle>
    </>
  );
};

export default BlogCont;
