import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
