import React, { FC, ReactNode } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Section.scss";

interface Props {
  icon?: IconProp;
  title: string;
  children?: ReactNode;
}

const Section: FC<Props> = ({ icon, title = "Title", children }: Props) => {
  return (
    <div className="section">
      <div className="section__title">
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        <h1>{title}</h1>
      </div>

      <hr />

      {children}
    </div>
  );
};

export default Section;
