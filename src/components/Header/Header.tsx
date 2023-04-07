import React, { FC } from "react";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMoon,
  faSun,
  faFilePdf,
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
  const isMacOS = window.navigator.platform.startsWith("Mac");

  const printDocument = async () => {
    // Fix for html2canvas not showing SVG
    const svgElements = document.body.querySelectorAll("svg");
    svgElements.forEach(function (item) {
      item.setAttribute("width", item.getBoundingClientRect().width.toString());
      item.setAttribute("height", item.getBoundingClientRect().height.toString());
    });

    const headerText = document.getElementsByClassName("header-notes")[0];
    headerText.classList.add("invisible");

    const imageData = await (await html2canvas(document.body)).toDataURL("image/png");

    headerText.classList.remove("invisible");
    const pdf = new jsPDF();
    pdf.addImage(imageData, "PNG", 20, -3, -160, -160, "FAST", "FAST");
    pdf.save("CV-Tomislav-Peric.pdf");
  };

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
        <p>
          This CV is written in React.js and is fully responsive.
          <br />
          <br />- You can print it using {isMacOS ? "Command" : "Ctrl"} + P (recommended)
          <br />- You can generate a PDF version by clicking on the button below (desktop)
          <br />- Or you can clone the source code at{" "}
          <a href="https://github.com/tperich/curriculum-vitae" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          and run it inside Docker!
          <br />
          <br />
          V2 will probably run Doom
        </p>

        <div className="buttons-area">
          <div className="pdf-button" title="Download PDF" onClick={printDocument}>
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </div>
          <div className="theme-button" title="Toggle dark/light theme" onClick={toggleTheme}>
            <FontAwesomeIcon className="icon" icon={theme === "light" ? faMoon : faSun} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
