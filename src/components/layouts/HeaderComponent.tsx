import { useState } from "react";
import { GoHomeFill, GoBell, GoPeople } from "react-icons/go";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ButtonLink from "@/components/ui/ButtonLink";
import ButtonText from "@/components/ui/ButtonText";
import SearchBar from "@/components/ui/SearchBar";
import Modal from "@/components/ui/Modal";
import img from "@/assets/ubel.jpg";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-16 py-2 px-6 bg-black w-full items-center justify-between">
      <div className="w-1/3">
        <ButtonLink
          link={"/home"}
          label="Home"
          icon={<GoHomeFill size={28} />}
          className="bg-[#242424] rounded-full w-11"
          isTooltip
          tooltipPlace="bottom"
        />
      </div>

      <SearchBar inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <div className="flex items-center gap-4  w-1/3 justify-end">
        <ButtonLink
          link={"/notifications"}
          label="What's New"
          icon={<GoBell size={20} color="#959595" />}
          isTooltip
        />
        <ButtonIcon
          label="Friend Activity"
          icon={<GoPeople size={20} color="#959595" />}
          isTooltip
        />
        <div className="relative">
          <ButtonIcon
            label="nvce"
            img={img}
            className="bg-center bg-cover "
            onClick={handleOpen}
            isTooltip
          />

          <Modal
            isOpen={isOpen}
            className="p-1 flex-col"
            children={
              <>
                <ButtonText
                  label="Account"
                  className="hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3"
                />

                <ButtonText
                  label="Profile"
                  className="hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3"
                />

                <ButtonText
                  label="Private Session"
                  className="hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3"
                />

                <ButtonText
                  label="Setting"
                  className="hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3"
                />

                <ButtonText
                  label="Log Out"
                  className="hover:bg-[#3e3e3e] rounded-sm w-[216px] text-sm p-3 border-t-[1px] border-[#3e3e3e]"
                />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
