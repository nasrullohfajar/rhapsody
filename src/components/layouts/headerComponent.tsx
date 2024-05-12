import { GoHomeFill, GoBell, GoPeople } from "react-icons/go";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import img from "@/assets/ubel.jpg";

const HeaderComponent = () => {
  return (
    <div className="flex h-16 py-2 px-6 bg-black w-full items-center justify-between">
      <div className="w-1/3">
        <Button
          label="Home"
          icon={<GoHomeFill size={28} />}
          className="bg-[#242424] rounded-full"
          isTooltip
          tooltipPlace="bottom"
        />
      </div>

      <SearchBar />

      <div className="flex items-center gap-4  w-1/3 justify-end">
        <Button
          label="What's New"
          icon={<GoBell size={20} color="#959595" />}
          isTooltip
        />
        <Button
          label="Friend Activity"
          icon={<GoPeople size={20} color="#959595" />}
          isTooltip
        />
        <Button
          label="nvce"
          img={img}
          className="bg-center bg-cover h-2"
          isTooltip
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
