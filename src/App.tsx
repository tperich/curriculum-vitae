import React, { FC, useEffect, useState } from "react";

import {
  faHammer,
  faHandHoldingHeart,
  faLaptopCode,
  faPeopleArrows,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

import { Header, Section, SectionItem } from "./components";
import { Theme } from "./types/entities";
import commData from "./data/communicational-skills.json";
import educationData from "./data/education.json";
import skillsData from "./data/job-skills.json";
import volunteeringData from "./data/volunteering.json";
import workData from "./data/work-experience.json";
import LocalStorageService from "./services/LocalStorageService";
import "./styles/main.scss";

const App: FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const theme = LocalStorageService.getItem<Theme>("theme");
    if (theme) {
      document.body.classList.add(theme);
      theme && setTheme(theme);
    }
  }, []);

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    LocalStorageService.setItem("theme", theme);
  };

  return (
    <div className={`root ${theme}`}>
      <Header theme={theme} setTheme={toggleTheme} />

      <Section theme={theme} icon={faPeopleArrows} title="Objective">
        {commData.text.split("\n").map((line, index) => (
          <span key={index}>
            <br />
            {line}
          </span>
        ))}
        {/* Additional break-lines due to printing offset */}
        <br className="print-inline" />
        <br className="print-inline" />
        <br className="print-inline" />
        <br className="print-inline" />
      </Section>

      <Section theme={theme} icon={faHammer} title="Job-related skills">
        {skillsData.map((skillArea, index) => (
          <div key={index}>
            <h3 style={{ marginBottom: 5 }}>{skillArea.title}</h3>

            <ul style={{ margin: 0 }}>
              {skillArea.skills.map((skill, index) => (
                <li key={index}>
                  {skill.title} {skill.details && `(${skill.details})`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section theme={theme} icon={faLaptopCode} title="Work Experience">
        {workData.map((job, index) => (
          <SectionItem key={index} item={job} />
        ))}
      </Section>

      <div style={{ display: "flex", flexFlow: "row nowrap", width: "100vw" }}>
        <Section containerStyles={{ flex: 1 }} theme={theme} icon={faSchool} title="Education">
          {educationData.map((item, index) => (
            <SectionItem key={index} item={item} />
          ))}
        </Section>

        <Section containerStyles={{ flex: 1 }} theme={theme} icon={faHandHoldingHeart} title="Volunteering">
          {volunteeringData.map((item, index) => (
            <SectionItem key={index} item={item} />
          ))}
        </Section>
      </div>
    </div>
  );
};

export default App;
