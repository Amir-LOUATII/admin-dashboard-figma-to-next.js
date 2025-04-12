import ToggleSwitch from "@/components/shared/switcher";
import SearchInput from "./search-input";
import LanguagesSwitcher from "./languages-switcher";
import NotificationIcon from "./notification-icon";
import ProfileDropdown from "./profile-dropdown";

export default function Navbar() {
  return (
    <header className="w-full py-2 h-[94px] bg-white px-[35px] flex justify-between items-center shadow">
      <SearchInput />
      <div className="flex justify-between items-center gap-3.5">
        <ToggleSwitch />
        <LanguagesSwitcher />
        <NotificationIcon />
        <ProfileDropdown />
      </div>
    </header>
  );
}
