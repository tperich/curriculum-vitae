import React, { FC } from "react";
import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <h1 className="header__title">Tomislav Perić</h1>

      <div className="header__contact">
        <HeaderItem title="P" value="(+381) 69 303 1103" link="tel:+381693031103" />
        <HeaderItem
          title="E"
          value="tomislavperich@gmail.com"
          link="mailto:tomislavperich@gmail.com?subject=We would like to talk to you about..."
        />
        <HeaderItem title="W" value="github.com/tperich" link="https://github.com/tperich" />
        <HeaderItem title="A" value="Novi Sad, Serbia" link="https://www.google.com/maps/place/Novi+Sad/" />
      </div>
    </div>
  );
};

interface HeaderItemProps {
  title: string;
  value: string | number;
  link?: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ title, value, link }: HeaderItemProps) => {
  return (
    <div className="header-item">
      <p>{title}</p>
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

export default Header;
