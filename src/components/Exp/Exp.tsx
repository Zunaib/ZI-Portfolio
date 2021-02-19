import { FC, useRef, useState } from "react";

interface ExpProps {
  show: boolean;
  scrollRef: any;
  onClick: () => void;
}
const Exp: FC<ExpProps> = function ({ show, onClick, scrollRef }) {
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
    <div className="experience" ref={scrollRef}>
      <h2 className="exp-title" data-sr-id="8">
        Experience.
      </h2>
      <div className="exp-list">
        <div className="exp">
          <div className="exp_title" onClick={toggleExpOne}>
            <h4 className="work-designation">Software Engineer</h4>
            <h5 className="work-name">@Afiniti</h5>
            <i className={`fas fa-sort-down  ${expOne && "show"}`}></i>
          </div>
          <div
            ref={expOneContent}
            style={{ maxHeight: `${expOneHeight}` }}
            className="exp__content"
          >
            <div className={`work-content `}>
              <p className="work-tenure">Mar 2020 — Current</p>
              <p className="work-tenure">
                May 2019 — Mar 2020 - Analyst Software Engineer
              </p>
              <p className="work-description">
                At Afinti i am working on numerous projects, building Powerful
                and Responsive UI's, occasionally binding data elements too. I
                have developed a component library for the team aswell. All my
                work is in the following.
              </p>
              <ul className="list">
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>NextJS</li>
                <li>Gatsby</li>
                <li>Storybook</li>
                <li>Mongo</li>
                <li>Node</li>
                <li>GraphQL</li>
                <li>Hasura</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Upwork */}
        <div className="exp">
          <div className="exp_title" onClick={toggleExpTwo}>
            <h4 className="work-designation">Full Stack Developer</h4>
            <h5 className="work-name">@Upwork</h5>
            <i className={`fas fa-sort-down  ${expTwo && "show"}`}></i>
          </div>
          <div
            ref={expTwoContent}
            style={{ maxHeight: `${expTwoHeight}` }}
            className="exp__content"
          >
            <div className="work-content">
              <p className="work-tenure">Sept 2019 — Current</p>
              <p className="work-description">
                Working on Upwork, I've developed web applications for a lot of
                clients. Working on those websites i learned a lot of new things
                like:
              </p>
              <ul className="list">
                <li>Shopify</li>
                <li>Custom Designs</li>
                <li>External API Integration</li>
                <li>Ant Design</li>
                <li>Material UI</li>
                <li>Photoshop Designs To React Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
