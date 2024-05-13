import React from "react";
import { ISearchBar } from "../../types/Types";

const SearchBar = ({ className }: ISearchBar) => {
  return (
    <div
      className={`${className} w-[600px] h-11 p-2 bg-[#242424] rounded-full`}
    ></div>
  );
};

export default SearchBar;
