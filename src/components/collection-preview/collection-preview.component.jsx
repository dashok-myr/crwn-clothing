import React from "react";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";
import Collectionitem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items.map(({id, name, imageUrl, price}, index) => {
        if (index < 4) {
          return (
            <Collectionitem
              key={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          );
        }
      })}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
