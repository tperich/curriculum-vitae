import React, { FC } from "react";

import { Header, ColumnItem, JobItem } from "./components";
import workData from "./data/work-experience.json";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="root">
      <Header />

      <ColumnItem title="Work Experience">
        {workData.jobs.map((job, index) => (
          <JobItem key={index} job={job} />
        ))}
      </ColumnItem>

      <ColumnItem title="Communicational skills">Hello world</ColumnItem>
      <ColumnItem title="Job-related skills">Hello world</ColumnItem>
      <ColumnItem title="Education">Hello world</ColumnItem>
      <ColumnItem title="Volunteering">Hello world</ColumnItem>
    </div>
  );
};

export default App;
