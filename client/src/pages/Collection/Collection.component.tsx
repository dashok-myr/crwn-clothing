import React, { ReactElement } from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem.component";
import "./Collection.styles.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useRouteMatch } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";

export interface ICollection {
  title: string;
  id: string;
  routeName: string;
  items: IItem[];
}

const CollectionPage = (): ReactElement => {
  const match: any = useRouteMatch();
  const collectionUrlParam: string = match.params.collectionId;
  const collection: ICollection = useSelector(
    selectCollection(collectionUrlParam)
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
