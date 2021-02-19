import React, { FC } from "react";
import Github from "../../Svg/Github";
import Npm from "../../Svg/Npm";
import StackOverflow from "../../Svg/StackOverflow";
import LinkedIn from "../../Svg/LinkedIn";

export interface NavDropdownProps {
  open?: boolean;
  onProjectsClick: () => void;
  onContactClick: () => void;
  onExpClick: () => void;
  onClose: () => void;
}

const NavDropdown: FC<NavDropdownProps> = ({
  open,
  onClose,
  onExpClick,
  onContactClick,
  onProjectsClick,
}) => {
  return (
    <div>
      <div className={`nav-drop ${open && "drop-active"}`}>
        <section className="navdrop-right">
          <div className="drop-links">
            <div className="navdrop-close" onClick={onClose}></div>
            <div className="styled-links">
              <div className="nav-link" onClick={onExpClick}>
                Experience
              </div>
              <div className="nav-link" onClick={onProjectsClick}>
                Projects
              </div>
              <div className="nav-link" onClick={onContactClick}>
                Contact
              </div>
              <a
                className="nav-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="drop-stack-links">
              <Github />
              <Npm />
              <StackOverflow />
              <LinkedIn />
            </div>
          </div>
        </section>
      </div>
      <div
        className={`backdrop ${open && "drop-active"}`}
        onClick={onClose}
      ></div>
    </div>
  );
};

export default NavDropdown;
