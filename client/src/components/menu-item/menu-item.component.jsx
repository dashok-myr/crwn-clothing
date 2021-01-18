import React from "react";
import "./menu-item.styles.scss";
import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const goToPageFromLinkUrl = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  const onClickHandle = () => {
    goToPageFromLinkUrl();
  };

  return (
    <div className="menu-item" onClick={onClickHandle}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
