import React, { FC } from "react";
import Logo from "../../../assets/ZI-Logo.png";

export interface HeaderProps {
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  return (
    <header className={"topbar topbar-fixed"}>
      <section className={"topbar-left"}>
        <a className="topbar-logo" href="/zi-portfolio/">
          <img src={Logo} alt="Zunaib Imtiaz Logo" />
        </a>
      </section>

      <section className="topbar-right">
        <span className="sidenav-btn" onClick={onClick}>
          <div className="hamburger-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      </section>
    </header>
  );
};

export default Header;
