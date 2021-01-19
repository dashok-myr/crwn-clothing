import React from "react";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem.component";

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
