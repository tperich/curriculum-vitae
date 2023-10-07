import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMoon,
  faSun,
  faGlobeEurope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { HeaderItem } from "./HeaderItem";
import { Theme } from "../../types/entities";
import data from "../../data/header.json";
import "./Header.scss";

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: FC<HeaderProps> = ({ theme, setTheme }) => {
  const isMacOSUserAgent = window.navigator.userAgent.includes("Mac OS");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`header ${theme}`}>
      <div className="header-hero">
        <h1 className="header__title">{data.title}</h1>

        <div className="header__contact">
          <HeaderItem theme={theme} icon={faPhone} value={data.phone} link={`tel:${data.phone}`} />
          <HeaderItem
            theme={theme}
            icon={faEnvelope}
            value={data.email}
            link={`mailto:${data.email}?subject=We'd like to talk to you about...`}
          />
          <HeaderItem theme={theme} icon={faGlobeEurope} value={data.website} link={data.website} />
          <HeaderItem
            theme={theme}
            icon={faMapPin}
            value={data.address}
            link={`https://www.google.com/maps/place/${data.address}/`}
          />
        </div>
      </div>

      <div className="header-notes">
        <div className="print-inline">
          <img height="200px" src="public/me.jpg" />
        </div>

        <p className="no-print">
          This CV is written in React.js and is fully responsive.

          <br />
          <br />- You can print it using {isMacOSUserAgent ? "Command" : "Ctrl"} + P (recommended)
          <br />- Or you can clone the source code at{" "}

          <a
          {...theme === "dark" && { className: 'dark' }}
          href="https://github.com/tperich/curriculum-vitae" target="_blank" rel="noreferrer">
            Github
          </a>{" "}

          and run it inside Docker!
        </p>

        <div className="buttons-area no-print">
          <div className="theme-button" title="Toggle dark/light theme" onClick={toggleTheme}>
            <FontAwesomeIcon className="icon" icon={theme === "light" ? faMoon : faSun} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
