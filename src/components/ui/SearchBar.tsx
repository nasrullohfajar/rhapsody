import { GoSearch, GoX } from "react-icons/go";
import ButtonIcon from "./ButtonIcon";
import { ISearchBar } from "../../types/Types";

const SearchBar = ({ className, inputSearch, setInputSearch }: ISearchBar) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div
      className={`${className} flex items-center w-[600px] h-11 bg-[#242424] rounded-full outline-none`}
    >
      <ButtonIcon
        icon={<GoSearch size={23} />}
        className="bg-center bg-cover w-14"
        isTooltip
        disabled
      />

      <input
        type="text"
        name="search"
        placeholder="What do you want to play?"
        className="h-full w-full outline-none bg-transparent"
        value={inputSearch}
        onChange={handleChange}
      ></input>

      {inputSearch ? (
        <ButtonIcon
          label="Clear Search Field"
          icon={<GoX size={23} />}
          className="bg-center bg-cover w-14"
          isTooltip
          onClick={() => setInputSearch("")}
        />
      ) : (
        <div className="w-14"></div>
      )}
    </div>
  );
};

export default SearchBar;
