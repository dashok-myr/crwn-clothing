import React, { ReactElement } from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { useDispatch } from "react-redux";
import { addItemAction } from "../../redux/cart/cart-actions";
import { IItem } from "../../interfaces/IItem";

interface ICollectionItemProps {
  item: IItem;
}

const CollectionItem = (props: ICollectionItemProps): ReactElement => {
  const { item }: ICollectionItemProps = props;
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;

  const onHandleClick = (): void => {
    dispatch(addItemAction(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={onHandleClick}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
