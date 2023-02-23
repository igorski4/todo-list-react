import React from "react";
import cl from "./Checkbox.module.css";

export const Checkbox = ({ onChange, checked }) => {
  return (
    <label className={cl.label}>
      <input checked={checked} onChange={onChange} className={cl.status} type="checkbox" />
      <span className={cl.new_status}></span>
    </label>
  );
};
