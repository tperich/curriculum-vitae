import React, { FC } from "react";
import { Education, Job, Volunteering } from "../../../types/entities";
import "./SectionItem.scss";

interface Props {
  item: Job | Education | Volunteering;
}

const SectionItem: FC<Props> = ({ item }: Props) => {
  return (
    <div className="section-item">
      <p className="section-item__title">{item.title}</p>

      {"company" in item && <p>{item.company}</p>}
      {"position" in item && <p>{item.position}</p>}

      <p className="section-item__dates">
        {"hours" in item && <p>{item.hours}</p>}
        {"startedAt" in item && (
          <>
            {item.startedAt} - {item.current ? "Current" : item.endedAt}
          </>
        )}
      </p>
      <p className="section-item__address">{item.address}</p>
      <ul>
        {item.achievements?.map((achievement, index) => <li className="section-item__achievement" key={index}>{achievement}</li>)}
      </ul>
      {item.techStack && <p className="section-item__tech-stack"><b>Tech stack:</b> {item.techStack}</p>}
      {item.responsibilities && <p className="section-item__tech-stack"><b>Primary responsibilities:</b> {item.responsibilities}</p>}
    </div>
  );
};

export default SectionItem;
