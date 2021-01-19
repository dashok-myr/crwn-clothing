import React, { ReactElement } from "react";
import "./CustomButton.styles.scss";

interface ICustomButtonProps {
  children: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick: () => void;
}

const CustomButton = (props: ICustomButtonProps): ReactElement => {
  const {
    children,
    isGoogleSignIn,
    inverted,
    onClick,
  }: ICustomButtonProps = props;
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
