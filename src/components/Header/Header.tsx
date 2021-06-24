import React, { FC } from "react";

import {
  faAddressBook,
  faAddressCard,
  faAngry,
  faChalkboardTeacher,
  faCode,
  faCodeBranch,
  faComment,
  faDownload,
  faEnvelope,
  faFilePdf,
  faGlobeEurope,
  faMapPin,
  faParagraph,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { HeaderItem } from "./HeaderItem";
import data from "../../data/header.json";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: FC = () => {
  const isMacOS = window.navigator.platform.startsWith("Mac");

  const printDocument = () => {
    const input = document.getElementById("root");
    console.log(input);
  };

  return (
    <div className="header">
      <div className="header-hero">
        <h1 className="header__title">{data.title}</h1>

        <div className="header__contact">
          <HeaderItem icon={faPhone} value={data.phone} link={`tel:${data.phone}`} />
          <HeaderItem
            icon={faEnvelope}
            value={data.email}
            link={`mailto:${data.email}?subject=We'd like to talk to you about...`}
          />
          <HeaderItem icon={faGlobeEurope} value={data.website} link={data.website} />
          <HeaderItem
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
          - You can download a PDF version in the right corner
          <br />- You can print it using {isMacOS ? "Command" : "Ctrl"} + P
          <br />
          - You can use the options below to export it in JSON
          <br />- Or you can clone the source code at{" "}
          <a href="https://github.com/tperich/cv-react" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          and run it inside Docker!
          <br />
          <br />
          V2 will probably run Doom
        </p>

        <div>
          <a title="Download PDF" onClick={printDocument}>
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </a>
          <a href="#" title="Export JSON">
            <FontAwesomeIcon className="icon" icon={faCode} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
