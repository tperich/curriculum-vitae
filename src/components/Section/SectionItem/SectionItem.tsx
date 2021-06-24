import React, { FC } from "react";
import { Education, Job } from "../../../types/entities";
import "./SectionItem.scss";

interface Props {
  item: Job | Education;
}

const SectionItem: FC<Props> = ({ item }: Props) => {
  return (
    <div className="job-item">
      <p className="job-item__title">{item.title}</p>

      {"company" in item && <p>{item.company}</p>}

      <p className="job-item__dates">
        {item.startedAt} - {item.current ? "Current" : item.endedAt}
      </p>
      <p className="job-item__address">{item.address}</p>
    </div>
  );
};

export default SectionItem;
