import React from "react";
import style from "./Input.less";

interface IProps {
  type?: string;
  placeholder?: string;
  name?: string;
  classNames?: string;
  ref?: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange: () => void;
}

const Input: React.FC<IProps> = React.forwardRef(
  ({ type, placeholder, name, classNames, value, onChange }, ref: React.RefObject<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={classNames ? `${style.input} ${classNames}` : style.input}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    );
  }
);

Input.defaultProps = {
  type: "text",
  placeholder: "Введите значение",
  name: "text",
  onChange: () => {}
};

export default Input;
