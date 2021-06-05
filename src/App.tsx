import React, { useRef, useState } from "react";
import Layout from "./components/Layout";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Connect from "./components/Connect";

function App() {
  const scrollToExp = useRef<HTMLDivElement>(null);
  const executeExpScroll = () => {
    setExp(!exp);
    scrollToExp?.current?.scrollIntoView();
  };

  const scrollToProjects = useRef<HTMLDivElement>(null);
  const executeProjectsScroll = () => {
    setProjects(!projects);
    scrollToProjects?.current?.scrollIntoView();
  };

  const scrollToContact = useRef<HTMLDivElement>(null);
  const executeContactScroll = () => scrollToContact?.current?.scrollIntoView();

  const [exp, setExp] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <Layout
      onExpScroll={executeExpScroll}
      onContactScroll={executeContactScroll}
      onProjectsScroll={executeProjectsScroll}
    >
      <div className="index">
        <div className="intro">
          <h5 className="intro-one">Hi, I'm</h5>
          <h1 className="intro-two">Zunaib Imtiaz.</h1>
          <h3 className="intro-three">
            Full Stack Developer at
            <a
              className="intro-afiniti"
              href="https://www.afiniti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afiniti.
            </a>
          </h3>
          <h5 className="intro-four">
            I have a background in user interface development, prototype
            designing and experience working on complex interface systems and
            modular application servers for a wide range of experiences as well
            as the tooling needed to help achieve that goal.
          </h5>
        </div>
      </div>

      <Exp scrollRef={scrollToExp} show={exp} onClick={() => setExp(!exp)} />
      <Projects
        scrollRef={scrollToProjects}
        show={projects}
        onClick={() => setProjects(!projects)}
      />
      <Stack />
      <Connect scrollRef={scrollToContact} />
    </Layout>
  );
}

export default App;
