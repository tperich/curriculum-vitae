import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "./HeaderItem.scss";

interface HeaderItemProps {
  title?: string;
  icon?: IconProp;
  value: string | number;
  link?: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ title, icon, value, link }: HeaderItemProps) => {
  return (
    <div className="header-item">
      <div className="header-item__title">
        {title}
        {icon && <FontAwesomeIcon className="icon" icon={icon} color="black" />}
      </div>

      <div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
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
