import ToggleSwitch from "@/components/shared/switcher";
import SearchInput from "./search-input";
import LanguagesSwitcher from "./languages-switcher";
import NotificationIcon from "./notification-icon";

export default function Navbar() {
  return (
    <header className="w-full py-2 h-[94px] bg-white px-[35px] flex justify-between items-center">
      <SearchInput />
      <ToggleSwitch />
      <LanguagesSwitcher />
      <NotificationIcon />
    </header>
  );
}
