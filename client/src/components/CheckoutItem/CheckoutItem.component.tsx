import React, { ReactElement } from "react";
import "./CheckoutItem.styles.scss";
import { useDispatch } from "react-redux";
import {
  addItemAction,
  clearItemFromCartAction,
  removeItemAction,
} from "../../redux/cart/cart-actions";
import { ICartItem } from "../../interfaces/ICartItem";

interface ICheckoutItemProps {
  cartItem: ICartItem;
}

const CheckoutItem = (props: ICheckoutItemProps): ReactElement => {
  const dispatch = useDispatch();
  const { cartItem }: ICheckoutItemProps = props;
  const { name, imageUrl, price, quantity }: ICartItem = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(removeItemAction(cartItem))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={() => dispatch(addItemAction(cartItem))}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => dispatch(clearItemFromCartAction(cartItem))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
