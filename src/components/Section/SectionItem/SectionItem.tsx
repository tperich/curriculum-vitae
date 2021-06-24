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
        {"startedAt" in item && (
          <>
            {item.startedAt} - {item.current ? "Current" : item.endedAt}
          </>
        )}
      </p>
      <p className="section-item__address">{item.address}</p>
    </div>
  );
};

export default SectionItem;
