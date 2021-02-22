import React, { ReactNode, FC, useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import NavDropdown from "./NavDropdown";
import Github from "../Svg/Github";
import Npm from "../Svg/Npm";
import StackOverflow from "../Svg/StackOverflow";
import LinkedIn from "../Svg/LinkedIn";
import { useWidthHeight } from "../useWidthHeight";
export interface LayoutProps {
  onProjectsScroll: () => void;
  onContactScroll: () => void;
  onExpScroll: () => void;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({
  children,
  onExpScroll,
  onContactScroll,
  onProjectsScroll,
}) => {
  const { width } = useWidthHeight();
  const breakpoint = 1200;

  const [navDrop, setnavDrop] = useState(false);

  return (
    <>
      <Header onClick={() => setnavDrop(true)} />
      <NavDropdown
        onProjectsClick={() => {
          onProjectsScroll();
          setnavDrop(false);
        }}
        onExpClick={() => {
          onExpScroll();
          setnavDrop(false);
        }}
        onContactClick={() => {
          onContactScroll();
          setnavDrop(false);
        }}
        open={navDrop}
        onClose={() => setnavDrop(false)}
      />
      <main>{children}</main>
      <div className="footer">
        <div className="stack-links">
          {width < breakpoint ? (
            <>
              <div className="line"></div>
              <Github />
              <Npm />
              <StackOverflow />
              <LinkedIn />
            </>
          ) : (
            <>
              <Github />
              <Npm />
              <StackOverflow />
              <LinkedIn />
              <div className="line"></div>
            </>
          )}
        </div>
        <div className="email-link">
          <a className="anchor-email" href="mailto:zunaib60@gmail.com">
            <p className="p-email">zunaib60@gmail.com</p>
          </a>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
