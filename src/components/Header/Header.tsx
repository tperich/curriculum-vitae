import React, { FC } from "react";

import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faFilePdf, faGlobeEurope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";

import { HeaderItem } from "./HeaderItem";
import data from "../../data/header.json";
import "./Header.scss";

const Header: FC = () => {
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

  const fetchJSON = () => {
    axios
      .get("https://localhost:3000/generate-json")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Errrror:", error);
      });
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
          <br />- You can print it using {isMacOS ? "Command" : "Ctrl"} + P
          <br />- You can download a PDF version by clicking on the button below
          <br />
          - You can export it in JSON by cliking the code button below
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
          <a className="pdf-button" title="Download PDF" onClick={printDocument}>
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </a>
          <button type="button" className="json-button" title="Export JSON" onClick={fetchJSON}>
            <FontAwesomeIcon className="icon" icon={faCode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
