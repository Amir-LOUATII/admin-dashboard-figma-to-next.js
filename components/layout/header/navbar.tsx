import ToggleSwitch from "@/components/shared/switcher";
import SearchInput from "./search-input";

export default function Navbar() {
  return (
    <header className="w-full py-2 h-[94px] bg-white px-[35px] flex justify-between items-center">
      <SearchInput />
      <ToggleSwitch />
    </header>
  );
}
