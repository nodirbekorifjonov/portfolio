import React from "react";
import { Link } from "react-router-dom";

// styles
import "./style.css";

// data
import blogsData from "../../assets/data/blogs.json";

const Blog = () => {
  return (
    <section
      id="blog"
      className="section fadeIn px-[3rem] w-full min-h-screen text-[#302e4d]"
    >
      <div className="main-container pt-[6rem] pb-[7rem]">
        <div className="blog__title components__title relative mb-[8.5rem]">
          <h2 className="text-[4rem] font-bold font-rubik">Latest Blog</h2>
        </div>
        <ul className="blogs__list w-full flex flex-wrap justify-evenly gap-x-[2rem] gap-y-[5.5rem] ">
          {blogsData.map((blog, index) => (
            <li
              key={index}
              className="blogs__item relative bg-[#fff] flex flex-col items-center rounded-[1rem] shadow-blue-gray-500/40 max-w-[38.4rem]"
            >
              <div className="blogs__item-img rounded-[1rem] w-[90%] h-[23.5rem] overflow-hidden m-[-2.5rem]">
                <img
                  src={blog.blogImage}
                  alt=""
                  className="w-full h-full object-cover mx-auto"
                />
              </div>
              <div className="blogs__item-info p-[2.4rem] w-full mt-[2.4rem] font-montserrat block">
                <h4 className="text-[1.8rem] font-bold mb-[0.8rem] max-[410px]:text-[1.6rem]">
                  {blog.blogTitle}
                </h4>
                <div className="h-[9.6rem]">
                  <p className="text-[1.6rem] font-light text-[#504e70] max-[410px]:text-[1.4rem]">
                    {blog.blogInfo}
                  </p>
                </div>
              </div>
              <div className="self-start px-[2.4rem] pb-[2.4rem] max-[410px]:px-[2rem] max-[410px]:pb-[2rem]">
                <Link
                  to={blog.blogUrl}
                  target="_blank"
                  className="block py-[1.2rem] px-[2.4rem] text-center bg-[#ec1839] text-[1.4rem] rounded-[0.8rem] text-white font-semibold uppercase font-rubik border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/2"
                >
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
