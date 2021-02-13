import React from "react";
import FrontEnd from "../Svg/FrontEnd";
import BackEnd from "../Svg/BackEnd";

export const Stack = () => {
  return (
    <section className="stack">
      <h2 className="stack-title" data-sr-id="8">
        Stack.
      </h2>
      <div className="stack-wrap">
        <div className="stack-dev">
          <FrontEnd />
          <h2>Front End Development</h2>
          <p>
            I love to work actively on the user interaction portion of a
            software development lifecycle from sketch prototypes to frontend
            development.
          </p>
          <p className="stack-subtitle">Things I love developing</p>
          <p className="stack-subdesc">Wireframes, Websites, Prototypes</p>
          <p className="stack-subtitle">Dev Tools + Languages</p>
          <ul className="stack-list">
            <li className="stack-elem">ReactJS</li>
            <li className="stack-elem">Redux</li>
            <li className="stack-elem">NextJS</li>
            <li className="stack-elem">GatsbyJS</li>
            <li className="stack-elem">Storybook</li>
            <li className="stack-elem">Typescript</li>
            <li className="stack-elem">HTML/ CSS / SaSS</li>
            <li className="stack-elem">Adobe Photoshop</li>
            <li className="stack-elem">Adobe XD</li>
          </ul>
        </div>
        <div className="stack-dev">
          <BackEnd />
          <h2>Back End Development</h2>
          <p>
            I also love to get down to the handler stuff and build APIs;
            servers; node architectures; and generally full-fledged backend
            apps.
          </p>
          <p className="stack-subtitle">Things I love building</p>
          <p className="stack-subdesc">
            Web Apps, API's, Servers. DB's, Data Management
          </p>
          <p className="stack-subtitle">Dev Tools + languages</p>
          <ul className="stack-list">
            <li className="stack-elem">NodeJS</li>
            <li className="stack-elem">Golang</li>
            <li className="stack-elem">PHP</li>
            <li className="stack-elem">Java</li>
            <li className="stack-elem">Javascript</li>
            <li className="stack-elem">MongoDB</li>
            <li className="stack-elem">SQL</li>
            <li className="stack-elem">Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
