import React, { FC } from "react";

import {
  faHammer,
  faHandHoldingHeart,
  faLaptopCode,
  faPeopleArrows,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

import { Header, Section, SectionItem } from "./components";
import workData from "./data/work-experience.json";
import commData from "./data/communicational-skills.json";
import skillsData from "./data/job-skills.json";
import educationData from "./data/education.json";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="root">
      <Header />

      <Section icon={faLaptopCode} title="Work Experience">
        {workData.map((job, index) => (
          <SectionItem key={index} item={job} />
        ))}
      </Section>

      <Section icon={faPeopleArrows} title="Communicational skills">
        {commData.text.split("\n").map(line => (
          <>
            <br />
            {line}
          </>
        ))}
        {/* Additional break-lines due to printing offset */}
        <br />
        <br />
        <br />
      </Section>

      <Section icon={faHammer} title="Job-related skills">
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

      <Section icon={faSchool} title="Education">
        {educationData.map((item, index) => (
          <SectionItem key={index} item={item} />
        ))}
      </Section>

      <Section icon={faHandHoldingHeart} title="Volunteering">
        Hello world
      </Section>
    </div>
  );
};

export default App;
