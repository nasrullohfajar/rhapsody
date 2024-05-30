import React from "react";
import { IButton } from "../../types/Types";

const ButtonText = ({ onClick, label, className, disabled }: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center`}
    >
      {label}
    </button>
  );
};

export default ButtonText;
