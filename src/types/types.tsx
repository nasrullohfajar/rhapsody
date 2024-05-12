import { PlacesType } from "react-tooltip";

export interface IButton {
  onClick?: any;
  disabled?: any;
  label?: string;
  icon?: React.ReactNode;
  img?: string;
  className?: string;
  isTooltip?: boolean;
  tooltipPlace?: PlacesType;
}

export interface ISearchBar {
  onClick?: any;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}
