import React, { CSSProperties, FC, ReactNode } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Section.scss";

interface Props {
  icon?: IconProp;
  title: string;
  children?: ReactNode;
  containerStyles?: CSSProperties;
}

const Section: FC<Props> = ({ icon, title = "Title", children, containerStyles }: Props) => {
  return (
    <div className="section" style={containerStyles}>
      <div className="section__title">
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        <h1>{title}</h1>
      </div>
      <hr />

      <div className="section__children">{children}</div>
    </div>
  );
};

export default Section;
