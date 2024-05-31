import { Tooltip } from "react-tooltip";
import { IButton } from "../../types/Types";

const ButtonIcon = ({
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
      data-tooltip-delay-show={500}
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
      {isTooltip && (
        <Tooltip
          id="tooltip-button"
          style={{
            padding: "4px 8px",
            zIndex: 99,
            boxShadow:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          }}
        />
      )}
    </button>
  );
};

export default ButtonIcon;
