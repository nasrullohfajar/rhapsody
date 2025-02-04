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

export interface IButtonLink {
  link: string;
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
  inputSearch: string;
  setInputSearch: Function;
}

export interface IModal {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
}
