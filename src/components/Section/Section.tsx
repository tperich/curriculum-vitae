import React, { CSSProperties, FC, ReactNode } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Section.scss";
import { Theme } from "../../types/entities";

interface Props {
  theme: Theme;
  icon?: IconProp;
  title: string;
  children?: ReactNode;
  containerStyles?: CSSProperties;
}

const Section: FC<Props> = ({ theme, icon, title = "Title", children, containerStyles }: Props) => {
  return (
    <div className={`section ${theme}`} style={containerStyles}>
      <div className={`section__title ${theme}`}>
        {icon && <FontAwesomeIcon className={`icon icon--${theme}`} icon={icon} />}
        <h1>{title}</h1>
      </div>
      <hr className="no-print" />

      <div className="section__children">{children}</div>
    </div>
  );
};

export default Section;
