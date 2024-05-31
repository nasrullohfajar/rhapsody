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
      {isTooltip && (
        <Tooltip
          id="tooltip-buttonlink"
          style={{
            padding: "4px 8px",
            zIndex: 99,
            boxShadow:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          }}
        />
      )}
    </>
  );
};

export default ButtonLink;
