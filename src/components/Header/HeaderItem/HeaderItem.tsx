import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "./HeaderItem.scss";
import { Theme } from "../../../types/entities";

interface HeaderItemProps {
  theme: Theme;
  title?: string;
  icon?: IconProp;
  value: string | number;
  link?: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ theme, title, icon, value, link }: HeaderItemProps) => {
  return (
    <div className="header-item">
      <div className="header-item__title">
        {title}
        {icon && <FontAwesomeIcon className={`icon icon--${theme}`} icon={icon} />}
      </div>

      <div className={theme}>
        {link ? (
          <a href={link} className={theme} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

export default HeaderItem;
