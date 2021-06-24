import React, { FC } from "react";
import { Job } from "../../types/entities";
import "./JobItem.scss";

interface Props {
  job: Job;
}

const JobItem: FC<Props> = ({ job }: Props) => {
  return (
    <div className="job-item">
      <p className="job-item__title">{job.position}</p>
      <p className="job-item__company">{job.company}</p>
      <p className="job-item__dates">
        {job.startedAt} - {job.current ? "Current" : job.endedAt}
      </p>
      <p className="job-item__address">{job.address}</p>
    </div>
  );
};

export default JobItem;
