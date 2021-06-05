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
                At Afiniti I started as an Analyst Software Engineer, initially
                worked on the User Interface development of an application and
                later on moved to Server-Side Development. I got promoted to
                Software Engineer in under 10 months and starting working on
                Full Stack Applications from scratch, training junior employees
                and developing services. I’ve worked on projects from
                diversified domains using following tools and technologies,
              </p>
              <ul className="list">
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>NextJS</li>
                <li>HTML 5/ CSS 3</li>
                <li>Storybook</li>
                <li>Mongo</li>
                <li>MySQL</li>
                <li>NodeJS</li>
                <li>Python</li>
                <li>Hasura</li>
                <li>SASS / Theming</li>
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
                Working on Upwork, I’ve dealt with projects from diverse domains
                and technologies. I have encountered issues and obstacles out of
                an organizational environment on Upwork which had let me to grow
                personally and professionally improving customer experience and
                my technical skills. While being a Freelancer I’ve performed /
                Worked on following,
              </p>
              <ul className="list">
                <li>Shopify</li>
                <li>Custom Designs</li>
                <li>API Integration</li>
                <li>Ant Design</li>
                <li>Material UI</li>
                <li>PSD To React Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
