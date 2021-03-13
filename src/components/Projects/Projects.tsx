import React, { FC, useRef, useState } from "react";

interface ProjectsProps {
  show: boolean;
  scrollRef: any;
  onClick: () => void;
}
const Projects: FC<ProjectsProps> = function ({ show, onClick, scrollRef }) {
  //Cfi Review
  const [cfi, setCFI] = useState("");
  const [cfiHeight, setCFIHeight] = useState("0px");
  const cfiContent = useRef<HTMLDivElement>(null);
  function toggleCFI() {
    setCFI(cfi === "" ? "active" : "");
    setCFIHeight(
      cfi === "active" ? "0px" : `${cfiContent?.current?.scrollHeight}px`
    );
  }

  // Our Family Tales
  const [familyTales, setFamilyTales] = useState("");
  const [familyTalesHeight, setFamilyTalesHeight] = useState("0px");
  const familyTalesContent = useRef<HTMLDivElement>(null);
  function toggleFamilyTales() {
    setFamilyTales(familyTales === "" ? "active" : "");
    setFamilyTalesHeight(
      familyTales === "active"
        ? "0px"
        : `${familyTalesContent?.current?.scrollHeight}px`
    );
  }

  // Airokit
  const [airokit, setAirokit] = useState("");
  const [airokitHeight, setAirokitHeight] = useState("0px");
  const airokitContent = useRef<HTMLDivElement>(null);
  function toggleAirokit() {
    setAirokit(airokit === "" ? "active" : "");
    setAirokitHeight(
      airokit === "active"
        ? "0px"
        : `${airokitContent?.current?.scrollHeight}px`
    );
  }

  // The Seek
  const [seek, setSeek] = useState("");
  const [seekHeight, setSeekHeight] = useState("0px");
  const seekContent = useRef<HTMLDivElement>(null);
  function toggleSeek() {
    setSeek(seek === "" ? "active" : "");
    setSeekHeight(
      seek === "active" ? "0px" : `${seekContent?.current?.scrollHeight}px`
    );
  }

  // Vogue
  const [vogue, setVogue] = useState("");
  const [vogueHeight, setVogueHeight] = useState("0px");
  const vogueContent = useRef<HTMLDivElement>(null);
  function toggleVogue() {
    setVogue(vogue === "" ? "active" : "");
    setVogueHeight(
      vogue === "active" ? "0px" : `${vogueContent?.current?.scrollHeight}px`
    );
  }

  // Point of Sale
  const [pos, setPos] = useState("");
  const [posHeight, setPosHeight] = useState("0px");
  const posContent = useRef<HTMLDivElement>(null);
  function togglePos() {
    setPos(pos === "" ? "active" : "");
    setPosHeight(
      pos === "active" ? "0px" : `${posContent?.current?.scrollHeight}px`
    );
  }

  return (
    <div className="projects" ref={scrollRef}>
      <h2 className="proj-title" data-sr-id="8">
        Projects.
      </h2>
      <div className="proj-list">
        <div className="proj">
          <div className="proj_title" onClick={toggleFamilyTales}>
            <h4 className="proj-designation">
              Our Family Tales -{" "}
              <span>Questionnaire E-Commerce Site To Tell Your Story.</span>
            </h4>
            <i className={`fas fa-sort-down  ${familyTales && "show"}`}></i>
          </div>
          <div
            ref={familyTalesContent}
            style={{ maxHeight: `${familyTalesHeight}` }}
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
          <div className="proj_title" onClick={toggleCFI}>
            <h4 className="proj-designation">
              CFI Review - <span>Review Site For Flying Instructors.</span>
            </h4>
            <i className={`fas fa-sort-down  ${cfi && "show"}`}></i>
          </div>
          <div
            ref={cfiContent}
            style={{ maxHeight: `${cfiHeight}` }}
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

        <div className="proj">
          <div className="proj_title" onClick={toggleAirokit}>
            <h4 className="proj-designation">
              Airokit - <span>React Component Library.</span>
            </h4>
            <i className={`fas fa-sort-down  ${airokit && "show"}`}></i>
          </div>
          <div
            ref={airokitContent}
            style={{ maxHeight: `${airokitHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                Airokit is a React based component library i developed for
                Afiniti. Airokit was built using React Js, SCSS, Custom Grid
                System, Responsive Design, White/Dark Theme, RollUp, StoryBook,
                Jest, Custom NPM Proxy and some third party applications.
                Airokit consists of every User Interface Component required to
                develop a User Interface. Used Docker to deploy StoryBook and
                deploy to Afiniti’s Custom Proxy.
              </p>
            </div>
          </div>
        </div>

        <div className="proj">
          <div className="proj_title" onClick={toggleSeek}>
            <h4 className="proj-designation">
              The Seek - <span>CCTV Surveillance System.</span>
            </h4>
            <i className={`fas fa-sort-down  ${seek && "show"}`}></i>
          </div>
          <div
            ref={seekContent}
            style={{ maxHeight: `${seekHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                The Seek is a Machine Learning based CCTV Surveillance System. I
                developed this project using React, Scss, Ant Design, Python,
                Python Flask, PyMongo, Numpy, Tensor-flow, Keras, Open-CV and
                Nvidia CUDA. This project captures CCTV Feed using Device IP’s,
                runs an activity and an object detection model to detect
                suspicious activity and notify administration. The suspicious
                part is also recorded and stored for admin to review or use
                later. Demo can be provided upon request.
              </p>
            </div>
          </div>
        </div>

        <div className="proj">
          <div className="proj_title" onClick={toggleVogue}>
            <h4 className="proj-designation">
              Vogue Junction - <span>Fashion Freelance Portal.</span>
            </h4>
            <i className={`fas fa-sort-down  ${vogue && "show"}`}></i>
          </div>
          <div
            ref={vogueContent}
            style={{ maxHeight: `${vogueHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                Vogue Junction is one of my own projects. The idea behind vogue
                junction is to combine the functionalities of an e-commerce site
                with the likes of Youtube, Instagram and Medium. Specially
                designed for Fashion Freelancers to showcase and sell their work
                exclusively. This site was developed using React, Node, Mongo
                and purely custom designed theme in Scss.
              </p>
            </div>
          </div>
        </div>

        <div className="proj">
          <div className="proj_title" onClick={togglePos}>
            <h4 className="proj-designation">
              Point of Sales - <span>Inventory Management System.</span>
            </h4>
            <i className={`fas fa-sort-down  ${pos && "show"}`}></i>
          </div>
          <div
            ref={posContent}
            style={{ maxHeight: `${posHeight}` }}
            className="proj__content"
          >
            <div className="proj-content">
              <p className="proj-description">
                Developed numerous Point of Sale Systems for Local Clients and
                Univesity Projetcs. These POS Projects were built on diferrent
                stacks with the likes of PHP, Node JS, React, Angular, MongoDB,
                SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
