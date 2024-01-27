import React from "react";
import { Link } from "react-router-dom";

// react-icons
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section fadeIn px-[3rem] w-full min-h-screen font-montserrat text-[#302e4d]"
    >
      <div className="main-container pt-[6rem] pb-[7rem]">
        <div className="contact__title components__title relative mb-[6rem]">
          <h2 className="text-[4rem] font-bold font-rubik">Contact Me</h2>
        </div>
        {/* information */}
        <ul className="contact__list grid grid-cols-3 gap-[1.5rem] mb-[4rem] max-[700px]:grid-cols-1 max-[700px]:gap-[4rem]">
          <li className="contact__item">
            <Link
              to="tel:+998882710323"
              target="_blank"
              className="flex flex-col items-center px-[1.5rem] text-center"
            >
              <span className="text-[4rem] mb-[1.5rem] text-[#ec1839] block">
                <FaPhone />
              </span>
              <h5 className="text-[1.8rem] font-bold mb-[0.5rem]">
                Call Me On
              </h5>
              <p className="text-[1.6rem] leading-[1.6] text-[#504e70]">
                +998882710323
              </p>
            </Link>
          </li>
          <li className="contact__item">
            <Link className="flex flex-col items-center px-[1.5rem] text-center">
              <span className="text-[4rem] mb-[1.5rem] text-[#ec1839] block">
                <FaLocationDot />
              </span>
              <h5 className="text-[1.8rem] font-bold mb-[0.5rem]">Address</h5>
              <p className="text-[1.6rem] leading-[1.6] text-[#504e70]">
                Tashkent, Uzbekistan
              </p>
            </Link>
          </li>
          <li className="contact__item">
            <Link
              to="mailto:nodirbekorifjonov@mail.ru"
              target="_blank"
              className="flex flex-col items-center px-[1.5rem] text-center"
            >
              <span className="text-[4rem] mb-[1.5rem] text-[#ec1839] block">
                <FaEnvelope />
              </span>
              <h5 className="text-[1.8rem] font-bold mb-[0.5rem]">Email</h5>
              <p className="text-[1.6rem] leading-[1.6] text-[#504e70]">
                nodirbekorifjonov@mail.ru
              </p>
            </Link>
          </li>
        </ul>
        {/* Contact Form */}
        <form className="flex flex-col gap-[3rem] max-[700px]:gap-[1.5rem]">
          <div className="grid grid-cols-2 gap-[3rem] max-[700px]:grid-cols-1 max-[700px]:gap-[1.5rem]">
            <input
              type="text"
              placeholder="Name*"
              className="w-full py-[1.2rem] px-[2.5rem] border-[1px] border-[#d4d4e3] outline-none text-[1.6rem] text-[#504e70] transition-all duration-300 rounded-[2.5rem] focus:shadow-[0_0_20px_rgba(48,46,77,0.15)]"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full py-[1.2rem] px-[2.5rem] border-[1px] border-[#d4d4e3] outline-none text-[1.6rem] text-[#504e70] transition-all duration-300 rounded-[2.5rem] focus:shadow-[0_0_20px_rgba(48,46,77,0.15)]"
            />
          </div>
          <input
            type="email"
            placeholder="Email*"
            className="w-full py-[1.2rem] px-[2.5rem] border-[1px] border-[#d4d4e3] outline-none text-[1.6rem] text-[#504e70] transition-all duration-300 rounded-[2.5rem] focus:shadow-[0_0_20px_rgba(48,46,77,0.15)]"
          />
          <textarea
            placeholder="Your Message..."
            className="w-full py-[1.2rem] px-[2.5rem] border-[1px] border-[#d4d4e3] outline-none text-[1.6rem] text-[#504e70] transition-all duration-300 rounded-[2.5rem] min-h-[14rem] focus:shadow-[0_0_20px_rgba(48,46,77,0.15)]"
          ></textarea>
          <button
            type="submit"
            className="self-start flex justify-center items-center bg-[#ec1839] rounded-[4rem] py-[1.2rem] px-[3.5rem] font-rubik font-medium text-[1.6rem] transition-all duration-300 text-white hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
