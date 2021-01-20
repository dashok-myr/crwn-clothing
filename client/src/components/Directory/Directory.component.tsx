import React, { ReactElement } from "react";
import MenuItem from "../menu-item/MenuItem.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

export interface ISection {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}

const Directory = (): ReactElement => {
  const sections: ISection[] = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, imageUrl, linkUrl, title }) => {
        return (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
};

export default Directory;
