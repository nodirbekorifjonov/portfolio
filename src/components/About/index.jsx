import React from "react";

// react-router-dom
import { Link } from "react-router-dom";

// styles
import "./style.css";

// data
import infoData from "../../assets/data/info.json";
import skillsData from "../../assets/data/skills.json";
import educationData from "../../assets/data/education.json";
import experienceData from "../../assets/data/experience.json";

// files
import resume from "../../assets/resume.pdf";

// react-icons
import { FaCalendar } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="section fadeIn px-[3rem] w-full min-h-screen text-[#302e4d]"
    >
      <div className="main-container pt-[6rem] pb-[7rem]">
        <div className="about__title relative mb-[6rem]">
          <h2 className="text-[4rem] font-bold font-rubik">About Me</h2>
        </div>
        <div className="font-montserrat">
          <h4 className="text-[2.4rem] font-bold mb-[1.5rem]">
            I'm Nodirbek, a passionate{" "}
            <span className="text-[#ec1839] text-[1.8rem]">
              Frontend Developer
            </span>
          </h4>
          <p className="text-[1.6rem] text-[#504e70] text-justify">
            Hello, I'm Nodirbek Orifjonov, a skilled Frontend Developer with one
            year of experience. My journey in the world of web development has
            equipped me with the expertise to create engaging and user-friendly
            interfaces. Passionate about staying updated with the latest
            technologies, I bring a creative and detail-oriented approach to my
            work. Excited to contribute my skills and continue growing in the
            dynamic field of frontend development
          </p>
        </div>
        <div className="pt-[4rem] flex justify-between mb-[7rem] gap-[3rem]">
          <div className="about__informations font-montserrat flex flex-col">
            <div className="flex gap-[3rem] mb-[3rem]">
              <ul className="about__informations-list w-[28rem] text-[1.6rem] text-[#504e70]">
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <span className="font-semibold text-[#302e4d]">City : </span>
                  {infoData.city}
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <span className="font-semibold text-[#302e4d]">
                    Birthday :{" "}
                  </span>
                  {infoData.birthday}
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <span className="font-semibold text-[#302e4d]">Age : </span>
                  {infoData.age}
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <Link to={`https://${infoData.website}`} target="_blank">
                    <span className="font-semibold text-[#302e4d]">
                      Website :{" "}
                    </span>
                    {infoData.website}
                  </Link>
                </li>
              </ul>
              <ul className="about__informations-list w-[28rem] text-[1.6rem] text-[#504e70]">
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <Link to={`tel:${infoData.phone1}`}>
                    <span className="font-semibold text-[#302e4d]">
                      Phone Number :{" "}
                    </span>
                    {infoData.phone1}
                  </Link>
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <Link to={`tel:${infoData.phone2}`}>
                    <span className="font-semibold text-[#302e4d]">
                      Phone Number :{" "}
                    </span>
                    {infoData.phone2}
                  </Link>
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <Link to={`mailto:${infoData.email}`}>
                    <span className="font-semibold text-[#302e4d]">
                      Email :{" "}
                    </span>
                    {infoData.email}
                  </Link>
                </li>
                <li className="about__informations-item py-[1rem] w-full border-b-[1px] border-[#e8dfec]">
                  <span className="font-semibold text-[#302e4d]">
                    Freelance :{" "}
                  </span>
                  {infoData.freelance ? "Available" : "Not available"}
                </li>
              </ul>
            </div>
            <a
              href={resume}
              download="resume.pdf"
              className="self-start flex justify-center items-center bg-[#ec1839] rounded-[4rem] py-[1.2rem] px-[3.5rem] font-rubik font-medium text-[1.6rem] transition-all duration-300 text-white hover:scale-105"
            >
              Download CV
            </a>
          </div>
          <div className="about__skills w-[42rem]">
            <ul className="about__skills-list flex flex-col gap-[3rem]">
              {skillsData.map((skill, index) => (
                <li key={index} className="about__skills-item">
                  <div className="flex justify-between items-center mb-[0.8rem]">
                    <h5 className="text-[1.6rem] font-montserrat font-semibold">
                      {skill.skillName}
                    </h5>
                    <span className="text-[1.6rem]">{skill.progress}</span>
                  </div>
                  <div className="w-full bg-[#e3e3e3] h-[0.7rem] rounded-[0.4rem]">
                    <span
                      style={{ width: skill.progress }}
                      className="block bg-[#ec1839] h-full rounded-[0.4rem]"
                    ></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-[3rem]">
          <div className="about__education w-[50%]">
            <h4 className="text-[2.4rem] font-montserrat font-bold mb-[3rem]">
              Education
            </h4>
            <ul className="about__education relative py-[3rem] px-[1.5rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] shadow-[0_0_20px_rgb(48,46,77,0.15)]">
              {educationData.map((education, index) => (
                <li
                  key={index}
                  className="about__education-item relative pl-[3.7rem] pb-[3rem] font-montserrat"
                >
                  <span className="w-[1.5rem] h-[1.5rem] absolute rounded-full bg-[#ec1839] left-0 top-[0.5rem]"></span>
                  <span className="w-[1px] h-[100%] absolute bg-[#ec1839] left-[0.7rem] top-[0.5rem]"></span>

                  <span className="flex items-center gap-[0.5rem] text-[1.4rem] text-[#504e70] mb-[1.2rem]">
                    <FaCalendar />
                    {education.edicationDate}
                  </span>
                  <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
                    {education.educationTitle}
                  </h4>
                  <p className="text-[1.6rem] leading-[1.6] text-[#504e70]">
                    {education.educationInfo}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="about__education w-[50%]">
            <h4 className="text-[2.4rem] font-montserrat font-bold mb-[3rem]">
              Experience
            </h4>
            <ul className="about__experience relative py-[3rem] px-[1.5rem] bg-[#fdf9ff] border-[1px] border-[#d4d4e3] rounded-[1rem] shadow-[0_0_20px_rgb(48,46,77,0.15)]">
              {experienceData.map((experience, index) => (
                <li
                  key={index}
                  className="about__education-item relative pl-[3.7rem] pb-[5rem] font-montserrat"
                >
                  <span className="w-[1.5rem] h-[1.5rem] absolute rounded-full bg-[#ec1839] left-0 top-[0.5rem]"></span>
                  <span className="w-[1px] h-[100%] absolute bg-[#ec1839] left-[0.7rem] top-[0.5rem]"></span>

                  <span className="flex items-center gap-[0.5rem] text-[1.4rem] text-[#504e70] mb-[1.2rem]">
                    <FaCalendar />
                    {experience.experienceDate}
                  </span>
                  <h4 className="text-[1.8rem] font-bold mb-[1.5rem]">
                    {experience.experienceTitle}
                  </h4>
                  <p className="text-[1.6rem] leading-[1.6] text-[#504e70]">
                    {experience.experienceInfo}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
