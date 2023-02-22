import React from "react";
import clsx from "clsx";
import cl from "./Button.module.css";

export const Button = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(cl.button, className)}>
      {children}
    </button>
  );
};
