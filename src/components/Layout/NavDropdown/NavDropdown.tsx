import React, { FC } from "react";
import Github from "../../Svg/Github";
import Npm from "../../Svg/Npm";
import StackOverflow from "../../Svg/StackOverflow";
import LinkedIn from "../../Svg/LinkedIn";

export interface NavDropdownProps {
  open?: boolean;
  onClose: () => void;
}

const NavDropdown: FC<NavDropdownProps> = ({ open, onClose }) => {
  return (
    <>
      <div className={`nav-drop ${open && "drop-active"}`}>
        <section className="navdrop-right">
          <div className="drop-links">
            <div className="navdrop-close" onClick={onClose}></div>
            <div className="styled-links">
              <a href="#projects" className={`nav-link `}>
                Projects
              </a>
              <a href="#experience" className={`nav-link `}>
                Experience
              </a>
              <a href="#contact" className={`nav-link `}>
                Contact
              </a>
              <a
                className={`nav-link `}
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
    </>
  );
};

export default NavDropdown;
