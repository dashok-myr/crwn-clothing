import React from "react";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
      .filter((_, index) => index < 4)
      .map(({ id, name, imageUrl, price }, index) => {
        return (
          <CollectionItem
            key={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
          />
        );
      })}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
