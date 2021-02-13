import React, { FC } from "react";

interface ExpProps {
  show: boolean;
  onClick: () => void;
}
const Exp: FC<ExpProps> = function ({ show, onClick }) {
  return (
    <section className="experience">
      <h2 className="exp-title" data-sr-id="8">
        Experience.
      </h2>
      <div className="exp-list">
        <div className="exp">
          <div className="first-row afiniti" onClick={onClick}>
            <h4 className="afn-designation">Software Engineer</h4>
            <h5 className="afn-name">@Afiniti</h5>
            <i className={`fas fa-sort-down  ${show && "show"}`}></i>
          </div>
          <div className={`afn-description ${show && "show"}`}>
            <p className="afn-dates">Mar 2020 — Current</p>
            <p className="afn-dates">
              May 2019 — Mar 2020 - Analyst Software Engineer
            </p>
            <p className="afn-work">
              At Afinti i am working on numerous projects, building Powerful and
              Responsive UI's, occasionally binding data elements too. I have
              developed a component library for the team aswell. All my work is
              in the following .{" "}
            </p>
            <ul className="afn-tech">
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>NextJS</li>
              <li>Gatsby</li>
              <li>Storybook</li>
              <li>Mongo</li>
              <li>Node</li>
              <li>SCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
