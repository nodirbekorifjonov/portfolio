import React from "react";
import { Link } from "react-router-dom";

// styles
import "./style.css";

// react-icons
import { FaSearch } from "react-icons/fa";

// data
import applicationsData from "../../assets/data/applications.json";

const Application = () => {
  return (
    <section
      id="applications"
      className="section fadeIn px-[3rem] w-full min-h-screen text-[#302e4d]"
    >
      <div className="main-container pt-[6rem] pb-[7rem]">
        <div className="application__title components__title relative mb-[6rem]">
          <h2 className="text-[4rem] font-bold font-rubik">My Applications</h2>
        </div>
        <div>
          <ul className="applications__list flex justify-evenly flex-wrap gap-[3rem]">
            {applicationsData.map((app, index) => (
              <li key={index} className="applications__item">
                <Link to={app.appUrl} target="_blank">
                  <div className="applications__preview relative border-[0.6rem] border-[#fdf9ff] w-[33.4rem] h-[20rem] rounded-[1rem] overflow-hidden mb-[1rem] transition-all duration-300">
                    <img src={app.appImage} alt="" className="w-full" />
                    <div
                      target="_blank"
                      className="applications__preview-hover absolute w-full h-full bg-[rgba(0,0,0,0.8)] z-[1] top-0 left-0 bottom-0 pt-[3rem] pb-[2rem] pl-[3rem] pr-[1.5rem] flex justify-between opacity-0 transition-all duration-300"
                    >
                      <p className="text-[1.8rem] font-montserrat font-bold text-[#fff] translate-x-[-2rem] transition-all duration-300">
                        {app.appTitle}
                      </p>
                      <span className="w-[4rem] h-[4rem] flex justify-center items-center text-[#ec1839] bg-[#fff] rounded-full self-end translate-x-[2rem] transition-all duration-300">
                        <FaSearch />
                      </span>
                    </div>
                  </div>
                  <h5 className="text-[1.6rem] font-bold ml-[1rem]">
                    Go to <span className="text-[#ec1839]">{app.appTitle}</span>
                  </h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Application;
