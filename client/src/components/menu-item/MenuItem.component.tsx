import React, { ReactElement } from "react";
import "./menu-item.styles.scss";
import { useHistory, useRouteMatch } from "react-router-dom";

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
}

const MenuItem = (props: IMenuItemProps): ReactElement => {
  const { title, imageUrl, linkUrl }: IMenuItemProps = props;
  const history = useHistory();
  const match = useRouteMatch();

  const goToPageFromLinkUrl = (): void => {
    history.push(`${match.url}${linkUrl}`);
  };

  const onClickHandle = (): void => {
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
