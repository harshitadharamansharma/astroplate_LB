import React from "react";
import { useState } from "react";

import accordionData from "./assets/joinUsAccordianData";
import "./Styles/joinus.css";
// import img from "./assets/joinus.jpg";
import double_arrow_icon from "./assets/double-right-svgrepo-com.svg";
import right_arrow from "./assets/right-arrow-svgrepo-com.svg";
import AccordionItem from "./AccordionItem";
// import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";
import steps_list from "./assets/JoinUsSteps";

// const main_title = "Apply To CPS Lab";
// const arrow = {
//   double_right : `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
// <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M10.2772 18.4623C9.9802 18.751 9.97351 19.2258 10.2623 19.5228C10.551 19.8198 11.0258 19.8265 11.3228 19.5377L10.2772 18.4623ZM18 12L18.5228 12.5377C18.6681 12.3965 18.75 12.2026 18.75 12C18.75 11.7974 18.6681 11.6035 18.5228 11.4623L18 12ZM11.3228 4.46225C11.0258 4.17351 10.551 4.1802 10.2623 4.47719C9.97351 4.77418 9.9802 5.24901 10.2772 5.53775L11.3228 4.46225ZM5.47721 17.2952C5.18021 17.584 5.17351 18.0588 5.46224 18.3558C5.75097 18.6528 6.2258 18.6595 6.52279 18.3708L5.47721 17.2952ZM12 12L12.5228 12.5378C12.668 12.3965 12.75 12.2026 12.75 12C12.75 11.7974 12.668 11.6035 12.5228 11.4622L12 12ZM6.52279 5.62924C6.2258 5.34051 5.75097 5.34721 5.46224 5.64421C5.17351 5.9412 5.18021 6.41603 5.47721 6.70476L6.52279 5.62924ZM11.3228 19.5377L18.5228 12.5377L17.4772 11.4623L10.2772 18.4623L11.3228 19.5377ZM18.5228 11.4623L11.3228 4.46225L10.2772 5.53775L17.4772 12.5377L18.5228 11.4623ZM6.52279 18.3708L12.5228 12.5378L11.4772 11.4622L5.47721 17.2952L6.52279 18.3708ZM12.5228 11.4622L6.52279 5.62924L5.47721 6.70476L11.4772 12.5378L12.5228 11.4622Z" fill="#000000"/>
// </svg>`,
// right : `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
// <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000"/>
// </svg>`
// }

const imp_points = [
  "Applications for internships are accepted throughout the year.",
  "The selection of interns is dynamic and based on the current research needs of the lab.",
  "We accept Undergraduate and Postgraduate students as well as Research Scholars for internships.",
  "No TA/DA shall be paid to the candidates.",
  "A minimum attendance of 100 days in the lab is mandatory.",
  "To apply for an internship in our lab, fill out the following form.",
];


const Joinsteps = (props) => {
  const { idx, title, desc } = props;
  return (
    <div className="join-steps-comp">
      <div className="step-idx">{idx}</div>
      <div className="steps-details">
        <h3 className="step-title">{title}</h3>
        <div className="step-description">{desc}</div>
      </div>
    </div>
  );
};

function JoinUs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="ju-outer-wrapper">
      {/* <TitleCard backgroundImage={img} title={main_title} /> */}
      <div className="join-wrapper">
        <div className="ju-first">
          <h3 className="ju-first-heading text-md font-semibold"> Apply for Research Internship</h3>
          <div className="ju-first-details">
            Applications are open for a 6-month internship for the 2024 batch of
            interns. We help our interns develop data-backed research aptitude
            toward new and exciting domains. Last date to apply is
            <b> January 25, 2024.</b>
          </div>
          <div className="ju-first-stipend">
            Selected candidates will receive a{" "}
            <b>monthly stipend of INR 10000.</b>
          </div>
        </div>
        <div className="ju-steps">
          <h3 className="selection-heading">The Selection Process</h3>
          <div className="steps-map">
            {steps_list.map((steps) => {
              return <Joinsteps {...steps} />;
            })}
          </div>
        </div>
        <div className="problem-domains">
          <h3 className="text-md font-bold">Problem Domains</h3>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>


        <div className="important-points">
          <h3 className="text-md font-bold">Important Points</h3>
          <div className="imp-pts-list">
            {imp_points.map((point, index) => {
              return (
                <div
                  className="list-wrapper "
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* <img
                    // src={hovered === index ? right_arrow : double_arrow_icon}
                    // src={hovered === index ? arrow[right] : arrow[double_right]}
                    // src={hovered === index ? right_arrow : double_arrow_icon}
                    className="arrow-icon"></img> */}
                    {/* {hovered === index ? <i class="fa-solid fa-arrow-right"></i> : <i class="fa-solid fa-arrow-right"></i>} */}
                  <div className="flex align-baseline">
                  <i className={hovered === index ? `pr-2 text-[var(--accent)] fas fa-angle-double-right`: `pr-2 text-[var(--accent)] fa-solid fa-arrow-right`}></i> 
                  <p className="point">{point}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <button className="form-button">Fill Application Form</button>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;

