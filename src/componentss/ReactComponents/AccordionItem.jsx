import React from "react";
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={toggleOpen}>
        <span className="accordion-icon">{isOpen ? "+" : "-"}</span>
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content.description}</p>
          <h4>Challenges for Research Interns</h4>
          <p>{content.challenges}</p>
          <h4>Prerequisites</h4>
          <div>
            <h5>1. Technical Skills</h5>
            <ol>
              {content.prerequisites["Technical Skills"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ol>
            <h5>2. Non-Technical Skills</h5>
            <ol>
              {content.prerequisites["Non-Technical Skills"].map(
                (skill, index) => (
                  <li key={index}>{skill}</li>
                )
              )}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;