import React from "react";
import cl from "./InputButton.module.css";

export const InputButton = ({ ...props }) => {
  return <input {...props} className={cl.input} />;
};
