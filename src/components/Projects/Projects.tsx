import React, { FC, useRef, useState } from "react";

interface ProjectsProps {
  show: boolean;
  scrollRef: any;
  onClick: () => void;
}
const Projects: FC<ProjectsProps> = function ({ show, onClick, scrollRef }) {
  // Afiniti
  const [expOne, setExpOne] = useState("");
  const [expOneHeight, setExpOneHeight] = useState("0px");
  const expOneContent = useRef<HTMLDivElement>(null);
  function toggleExpOne() {
    setExpOne(expOne === "" ? "active" : "");
    setExpOneHeight(
      expOne === "active" ? "0px" : `${expOneContent?.current?.scrollHeight}px`
    );
  }

  // Upwork
  const [expTwo, setExpTwo] = useState("");
  const [expTwoHeight, setExpTwoHeight] = useState("0px");
  const expTwoContent = useRef<HTMLDivElement>(null);
  function toggleExpTwo() {
    setExpTwo(expTwo === "" ? "active" : "");
    setExpTwoHeight(
      expTwo === "active" ? "0px" : `${expTwoContent?.current?.scrollHeight}px`
    );
  }

  return (
    <div className="projects" ref={scrollRef}>
      <h2 className="proj-title" data-sr-id="8">
        Projects.
      </h2>
      <div className="proj-list">
        <div className="proj">
          <div className="proj_title" onClick={toggleExpOne}>
            <h4 className="proj-designation">
              Our Family Tales -{" "}
              <span>Questionnaire E-Commerce Site To Tell Your Story.</span>
            </h4>
            <i className={`fas fa-sort-down  ${expOne && "show"}`}></i>
          </div>
          <div
            ref={expOneContent}
            style={{ maxHeight: `${expOneHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                I developed this site using <em>Shopify</em> and its objects.
                According to client demands i had to integrate Javascript and
                Sass to develop custom functionality and styling respectively.
                Delivering full client satisfaction.
              </p>
              <p className="proj-link">
                Take a loot at -
                <a
                  className="project-name"
                  href="https://www.ourfamilytales.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ourfamilytales.co
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="proj_title" onClick={toggleExpTwo}>
            <h4 className="proj-designation">
              CFI Review - <span>Review Site For Flying Instructors.</span>
            </h4>
            <i className={`fas fa-sort-down  ${expTwo && "show"}`}></i>
          </div>
          <div
            ref={expTwoContent}
            style={{ maxHeight: `${expTwoHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                I developed this site using MERN Stack. I used React and Ant
                Design to build Fully Responsive Custom Featured UI, Node and
                Mongo to handle Data Services.
              </p>
              <p className="proj-link">
                Take a loot at -
                <a
                  className="project-name"
                  href="https://www.cfireview.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cfireview.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
