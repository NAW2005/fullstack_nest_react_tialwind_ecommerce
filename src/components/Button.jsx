import React from "react";

const Button = ({ name, className = " " }) => {
  return <div className={` ${className}`}>{name}</div>;
};

export default Button;
