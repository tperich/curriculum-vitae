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

  const user = {
    name: import.meta.env.VITE_NAME || "John Doe",
    phone: import.meta.env.VITE_PHONE || "+(000) 00 000 0000",
    email: import.meta.env.VITE_EMAIL || "john@example.com",
    website: import.meta.env.VITE_WEBSITE || "https://example.org",
    location: import.meta.env.VITE_LOCATION || "Sidney, Australia",
  }

  return (
    <div className={`header ${theme}`}>
      <div className="header-hero">
        <h1 className="header__title">{user.name}</h1>

        <div className="header__contact">
          <HeaderItem theme={theme} icon={faPhone} value={user.phone} link={`tel:${user.phone}`} />
          <HeaderItem
            theme={theme}
            icon={faEnvelope}
            value={user.email}
            link={`mailto:${user.email}?subject=We'd like to talk to you about...`}
          />
          <HeaderItem theme={theme} icon={faGlobeEurope} value={user.website} link={user.website} />
          <HeaderItem
            theme={theme}
            icon={faMapPin}
            value={user.location}
            link={`https://www.google.com/maps/place/${user.location}/`}
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
