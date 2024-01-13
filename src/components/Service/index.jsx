import React from "react";

// styles
import "./style.css";

// react-icons
import {
  FaLaptop,
  FaReact,
  FaCode,
  FaRocket,
  FaPaintbrush,
} from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

const Service = () => {
  return (
    <section
      id="service"
      className="section fadeIn px-[3rem] w-full min-h-screen font-montserrat text-[#302e4d]"
    >
      <div className="main-container pt-[6rem] pb-[7rem]">
        <div className="service__title components__title relative mb-[6rem]">
          <h2 className="text-[4rem] font-bold font-rubik">Services</h2>
        </div>
        <ul className="services__list grid grid-cols-3 gap-[3rem] max-[975px]:grid-cols-2 max-[655px]:grid-cols-1">
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <FaLaptop />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">Web Design</h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              A web design service provides you with a customized website design
              that's perfect for your business or personal site. They'll work
              with you to create a design that matches your brand, while giving
              your customers a seamless user experience that will delight them.
            </p>
          </li>
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <FaReact />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
              React Developer
            </h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              React. js developers design and implement user interface
              components for JavaScript-based web and mobile applications using
              the React open-source library ecosystem. These skilled front-end
              developers are involved in all stages of interface component
              design, from conception through to final testing.
            </p>
          </li>
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <FaCode />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
              Web Development
            </h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              The primary scope of work for a web development company includes
              ideating, designing, creating and maintaining websites and
              applications.
            </p>
          </li>
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <MdOutlineDesignServices />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
              Graphic Design
            </h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              A web design service provides you with a customized website design
              that's perfect for your business or personal site. They'll work
              with you to create a design that matches your brand, while giving
              your customers a seamless user experience that will delight them.
            </p>
          </li>
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <FaRocket />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
              Seo Optimization
            </h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              Search engine optimization or SEO services are digital marketing
              services that improve rankings in search results for keywords
              relevant to a given business.
            </p>
          </li>
          <li className="services__item py-[3rem] px-[2rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgb(48,46,77,0.15)]">
            <span className="text-[#ec1839] text-[5rem] w-[6rem] h-[6rem] leading-[1.5] flex justify-center items-center mb-[3rem] rounded-full transition-all duration-300">
              <FaPaintbrush />
            </span>
            <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">Logo Design</h4>
            <p className="text-[1.6rem] text-[#504e70] leading-[1.6]">
              Logo design is the art of creating a visually stunning mark for a
              brand or company. A logo usually consists of a symbol, brandmark,
              or image that represents or symbolizes the company.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
