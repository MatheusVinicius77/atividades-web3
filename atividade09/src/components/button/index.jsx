import React from "react";
import "./index.css";
const FormButton = ({ title, color }) => {
  return (
    <button type="submit" className={`btn-form ${color === "red" ? "red" : "blue"}`}>
      {title}
    </button>
  );
};

export { FormButton };
