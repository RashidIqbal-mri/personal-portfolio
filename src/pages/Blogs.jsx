import React from "react";
import Header from "../components/blogs/header/Header";
import Posts from "../components/blogs/posts/Posts";
import Sidebar from "../components/blogs/sidebar/Sidebar";
import { useState, useEffect } from "react";
import "../Blogs.css"

import { Footer } from "../components/Footer";

const Blogs = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="blog-container">

      <nav className={`navbar  ${scrolled ? "scrolled" : ""}`}>
        <div className={` blog-head flex justify-between items-center mx-12 `}>
          {/* logo */}
          <div className="navbar-logo">
            <a
              href="https://rashid-parallax-forest.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-image h-10"
                src="images/logo.png"
                alt="Logo"
              />
              <img
                className="logo-image-hover h-10 hidden"
                src="images/logo3.png"
                alt="Hover Logo"
              />
            </a>
          </div>

          {/* Link */}
          <div className={`nav-link`}>
            <a
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white 
              }`}
            >
              Back to Home <span><i class="fa fa-home" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>
      </nav>
      <Header />
      <div className="flex">
        <Posts />
        <Sidebar />
       
        
      </div>
      
      </div>

    </>
  );
};

export default Blogs;
