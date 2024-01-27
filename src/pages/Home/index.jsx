import React from "react";

import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";

// react-icons
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const Home = () => {
  return (
    <>
      {/* Home */}
      <section
        id="home"
        className="home fadeIn flex flex-col justify-center items-center px-[3rem] w-full min-h-screen text-[#302e4d]"
      >
        <div className="main-container pt-[6rem] pb-[7rem] flex flex-col items-center text-center">
          {/* My Image */}
          <img
            src="/images/myimg.jpg"
            alt=""
            width={200}
            className="rounded-full border-[8px] border-[#ffffff] shadow-[0_0_20px_rgb(48,46,77,0.15)] mb-[2rem]"
          />
          <div className="home__info">
            <h1 className="home__name font-rubik text-[3rem] font-bold mb-[0.5rem]">
              Nodirbek Orifjonov
            </h1>
            <p className="home__description text-[1.6rem] font-montserrat leading-[2.2rem] font-medium text-[#504e70] mb-[2.5rem]">
              I am a Frontend developer
            </p>
            <ul className="home__socials flex justify-center items-center gap-[0.8rem]">
              <li className="home__social-link">
                <a
                  href="https://t.me/nodirbekorifjonov"
                  target="_blank"
                  className="flex justify-center items-center text-[#fff] text-[1.6rem] w-[3.1rem] h-[3.1rem] rounded-full bg-[#ec1839] transition-all duration-300 hover:scale-[1.1]"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="home__social-link">
                <a
                  href="https://twitter.com/orifjonov_n"
                  target="_blank"
                  className="flex justify-center items-center text-[#fff] text-[1.6rem] w-[3.1rem] h-[3.1rem] rounded-full bg-[#ec1839] transition-all duration-300 hover:scale-[1.1]"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="home__social-link">
                <a
                  href="https://www.instagram.com/nodirbekdev/"
                  target="_blank"
                  className="flex justify-center items-center text-[#fff] text-[1.6rem] w-[3.1rem] h-[3.1rem] rounded-full bg-[#ec1839] transition-all duration-300 hover:scale-[1.1]"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="home__social-link">
                <a
                  href="https://www.linkedin.com/in/nodirbek-orifjonov-aa1405291/"
                  target="_blank"
                  className="flex justify-center items-center text-[#fff] text-[1.6rem] w-[3.1rem] h-[3.1rem] rounded-full bg-[#ec1839] transition-all duration-300 hover:scale-[1.1]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="home__social-link">
                <a
                  href="https://github.com/nodirbekorifjonov"
                  target="_blank"
                  className="flex justify-center items-center text-[#fff] text-[1.6rem] w-[3.1rem] h-[3.1rem] rounded-full bg-[#ec1839] transition-all duration-300 hover:scale-[1.1]"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
