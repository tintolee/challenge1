import React from "react";
import "../styles/input.scss";
import { useField } from "formik";

export const InputComponent = ({ children, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="input-container">
      <label>
        {props.label} <span className="asterisk">{props.asterisk}</span>
      </label>
      <input {...field} {...props} />
     
    </div>
  );
};
export const SelectComponent = ({ children, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="input-container">
      <label>
        {props.label} <span className="asterisk">{props.asterisk}</span>
      </label>
      <select {...field} {...props}>
        {children}
      </select>
    </div>
  );
};
export const Button = ({ children, ...props }) => {
  return (
    <div className="input-container">
      <button {...props}>{children}</button>
    </div>
  );
};
