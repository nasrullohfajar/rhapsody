import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoHomeFill, GoHome, GoBell, GoPeople } from "react-icons/go";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ButtonLink from "@/components/ui/ButtonLink";
import ButtonText from "@/components/ui/ButtonText";
import SearchBar from "@/components/ui/SearchBar";
import Modal from "@/components/ui/Modal";
import img from "@/assets/ubel.jpg";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState("");

  const location = useLocation();

  console.log(location.pathname);

  const labels = [
    "Account",
    "Profile",
    "Private Session",
    "Setting",
    "Log Out",
  ];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex py-2 px-6 bg-black w-full items-center justify-between">
      <div className="w-1/3">
        <ButtonLink
          link={"/home"}
          label="Home"
          icon={
            location.pathname == "/home" ? (
              <GoHomeFill size={28} />
            ) : (
              <GoHome size={28} />
            )
          }
          className="bg-[#242424] rounded-full w-11 icon-md"
          isTooltip
          tooltipPlace="bottom"
        />
      </div>

      <SearchBar inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <div className="flex items-center gap-4  w-1/3 justify-end">
        <ButtonLink
          link={"/notifications"}
          label="What's New"
          icon={<GoBell size={20} className="icon-sm" />}
          isTooltip
        />
        <ButtonIcon
          label="Friend Activity"
          icon={<GoPeople size={20} className="icon-sm" />}
          isTooltip
        />
        <div className="relative">
          <ButtonIcon
            label="nvce"
            img={img}
            className="bg-center bg-cover icon-md"
            onClick={handleOpen}
            isTooltip
          />

          <Modal
            isOpen={isOpen}
            className="p-1 flex-col"
            children={labels.map((label) => (
              <ButtonText
                key={label}
                label={label}
                className={`hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3 ${
                  label === "Log Out" ? "border-t-[1px] border-[#3e3e3e]" : ""
                }`}
              />
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
