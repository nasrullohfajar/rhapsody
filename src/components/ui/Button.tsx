import React from "react";
import { Tooltip } from "react-tooltip";
import { IButton } from "../../types/Types";

const Button = ({
  onClick,
  label,
  icon = null,
  img,
  className,
  disabled,
  isTooltip = false,
  tooltipPlace,
}: IButton) => {
  return (
    <button
      data-tooltip-id="tooltip-button"
      data-tooltip-content={label}
      data-tooltip-place={tooltipPlace}
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center justify-center p-2`}
    >
      {icon && <span>{icon}</span>}
      {img && (
        <img
          src={img}
          alt="image"
          className="h-8 w-8 rounded-full object-cover"
        />
      )}
      {isTooltip && <Tooltip id="tooltip-button" />}
    </button>
  );
};

export default Button;
