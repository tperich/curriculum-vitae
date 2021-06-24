import React, { FC, ReactNode } from "react";
import "./ColumnItem.scss";

interface Props {
  title: string;
  children?: ReactNode;
}

const ColumnItem: FC<Props> = ({ title = "Title", children }: Props) => {
  return (
    <div className="column-item">
      <h1>{title}</h1>
      <hr />

      {children}
    </div>
  );
};

export default ColumnItem;
