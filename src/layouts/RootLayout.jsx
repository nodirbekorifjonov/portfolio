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
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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

  // aside open
  const [openAside, setOpenAside] = useState(false);

  return (
    <div className="flex h-full">
      {/* Aside */}
      <aside
        className={`aside fixed top-0 left-0 bottom-0 z-[10] w-[270px] flex-shrink-0 border-r-[1px] border-[#e8dfec] p-[3rem] text-[#302e4d] bg-[#fdf9ff] h-full transition-all duration-500 max-[1200px]:translate-x-[${
          openAside ? "0" : "-100%"
        }]`}
      >
        <div
          onClick={() =>
            !openAside ? setOpenAside(true) : setOpenAside(false)
          }
          className="burger absolute cursor-pointer w-[4.5rem] h-[4rem] bg-[#fdf9ff] top-[2rem] right-[-7.5rem] rounded-[5px] border-[1px] border-[#d4d4e3] text-[2.5rem] flex  justify-center items-center text-[#ec1839]"
        >
          {!openAside ? <RxHamburgerMenu /> : <IoClose />}
        </div>
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
                  onClick={() => {
                    handleLinkClick("home");
                    setOpenAside(false);
                  }}
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
                  onClick={() => {
                    handleLinkClick("about");
                    setOpenAside(false);
                  }}
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
                  onClick={() => {
                    handleLinkClick("service");
                    setOpenAside(false);
                  }}
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
                  onClick={() => {
                    handleLinkClick("applications");
                    setOpenAside(false);
                  }}
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
                  onClick={() => {
                    handleLinkClick("blog");
                    setOpenAside(false);
                  }}
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
                  onClick={() => {
                    handleLinkClick("contact");
                    setOpenAside(false);
                  }}
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
          <p className="text-[1.3rem] text-[#7d7d7d] font-montserrat mt-[-3rem]">
            © 2024 NFAUMI Template
          </p>
        </div>
      </aside>
      {/* Main */}
      <main className="bg-[#f2f2fc] w-full ml-[270px] overflow-x-hidden max-[1200px]:ml-0">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
