import React from "react";
import style from "./Button.less";

interface IProps {
  text: string;
  onClick?: () => void;
  classNames?: string;
}

const Button: React.FC<IProps> = ({ text, onClick, classNames }) => {
  return (
    <button className={classNames ? `${style.button} ${classNames}` : style.button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
