import React, { useState } from "react";

// react-router-dom
import { Outlet, Link, useNavigate } from "react-router-dom";

// styles
import "./style.css";

// react-icons
import {
  FaHouse,
  FaList,
  FaBriefcase,
  FaEnvelope,
  FaComments,
} from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

// components

const RootLayout = () => {
  !localStorage.getItem("active") && localStorage.setItem("active", "home");

  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(localStorage.getItem("active"));

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    navigate(linkName);
    localStorage.setItem("active", linkName);
  };

  return (
    <div className="flex h-full">
      {/* Aside */}
      <aside className="w-[270px] p-[3rem] text-[#302e4d] bg-[#fdf9ff] h-full">
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="site-logo relative text-[3.5rem] font-bold font-rubik leading-[5rem] px-[1rem] my-[3rem]"
          >
            NFAUMI
          </Link>
          <nav className="navbar py-[8rem] w-full font-montserrat text-[1.6rem] font-semibold">
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link
                  to="/"
                  onClick={() => handleLinkClick("home")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "home" ? "active" : ""
                  }`}
                >
                  <span className="text-[1.8rem]">
                    <FaHouse />
                  </span>
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="about"
                  onClick={() => handleLinkClick("about")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "about" ? "active" : ""
                  }`}
                >
                  <span className="">
                    <FaUser />
                  </span>
                  About Me
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="service"
                  onClick={() => handleLinkClick("service")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "service" ? "active" : ""
                  }`}
                >
                  <span className="">
                    <FaList />
                  </span>
                  Service
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="applications"
                  onClick={() => handleLinkClick("applications")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "applications" ? "active" : ""
                  }`}
                >
                  <span className="">
                    <FaBriefcase />
                  </span>
                  My Applications
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="blog"
                  onClick={() => handleLinkClick("blog")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                >
                  <span className="">
                    <FaEnvelope />
                  </span>
                  Blog
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="contact"
                  onClick={() => handleLinkClick("contact")}
                  className={`navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                >
                  <span className="text-[1.9rem]">
                    <FaComments />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main */}
      <main className="bg-[#f2f2fc]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
