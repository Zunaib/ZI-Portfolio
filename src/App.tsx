import React, { useState } from "react";
import Layout from "./components/Layout";
import Exp from "./components/Exp";
import Stack from "./components/Stack";
import Connect from "./components/Connect";

function App() {
  const [desc, setDesc] = useState(false);

  return (
    <Layout>
      <div className="index">
        <div className="intro">
          <h5 className="intro-one">Hi, I'm</h5>
          <h1 className="intro-two">Zunaib Imtiaz.</h1>
          <h3 className="intro-three">
            I'm a Software Engineer at
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
            I'm currently working with React, Redux, Typescript, Storybook,
            Scss, GatsbyJS, NextJS and much more exciting technologies.
          </h5>
        </div>
      </div>
      <Exp show={desc} onClick={() => setDesc(!desc)} />
      <Stack />
      <Connect />
    </Layout>
  );
}

export default App;
