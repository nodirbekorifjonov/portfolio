import React from "react";

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
import { Link } from "react-router-dom";

const Aside = () => {
  return (
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
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1 nav-link-active"
              >
                <span className="text-[1.8rem]">
                  <FaHouse />
                </span>
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1"
              >
                <span className="">
                  <FaUser />
                </span>
                About Me
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1"
              >
                <span className="">
                  <FaList />
                </span>
                Service
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1"
              >
                <span className="">
                  <FaBriefcase />
                </span>
                My Applications
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1"
              >
                <span className="">
                  <FaEnvelope />
                </span>
                Blog
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to=""
                className="navbar__link flex gap-[1rem] items-center leading-[4.5rem] border-b-[1px] border-[#e8dfec] transition-all hover:text-[#ec1839] hover:translate-x-1"
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
  );
};

export default Aside;
