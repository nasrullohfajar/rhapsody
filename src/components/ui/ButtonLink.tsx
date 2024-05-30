import React from "react";
import { Tooltip } from "react-tooltip";
import { IButtonLink } from "src/types/Types";
import { Link } from "react-router-dom";

const ButtonLink = ({
  link,
  label,
  icon,
  img,
  className,
  isTooltip,
  tooltipPlace,
}: IButtonLink) => {
  return (
    <>
      <Link
        to={link}
        data-tooltip-id="tooltip-buttonlink"
        data-tooltip-content={label}
        data-tooltip-place={tooltipPlace}
        data-tooltip-delay-show={1000}
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
      </Link>
      {isTooltip && <Tooltip id="tooltip-buttonlink" />}
    </>
  );
};

export default ButtonLink;
