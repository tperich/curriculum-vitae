import React, { FC } from "react";

import { faLaptopCode, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

import { Header, Section, JobItem } from "./components";
import workData from "./data/work-experience.json";
import commData from "./data/communicational-skills.json";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="root">
      <Header />

      <Section icon={faLaptopCode} title="Work Experience">
        {workData.jobs.map((job, index) => (
          <JobItem key={index} job={job} />
        ))}
      </Section>

      <Section icon={faPeopleArrows} title="Communicational skills">
        {commData.text.split("\n").map(line => (
          <>
            <br />
            {line}
          </>
        ))}
      </Section>

      <Section title="Job-related skills">Hello world</Section>

      <Section title="Education">Hello world</Section>

      <Section title="Volunteering">Hello world</Section>
    </div>
  );
};

export default App;
