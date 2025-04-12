"use client";
import chevronDown from "@/assets/icons/chevronDownIcon.svg";
import Image from "next/image";
import { useState } from "react";
import profilePic from "@/assets/images/profilePic.png";
export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleAction = (action: string) => {
    setOpen(false);
    if (action === "profile") {
      console.log("Go to profile");
    } else if (action === "logout") {
      console.log("Log out");
    }
  };

  return (
    <div className="relative w-[237px]">
      <button
        onClick={handleToggle}
        className="w-full h-[58px] rounded-2xl border border-transparent bg-white flex items-center  pe-[18px]"
      >
        <Image
          src={profilePic}
          alt="Profile"
          className="w-[56px] h-[56px]  object-cover mr-4"
        />
        <div className="flex-1 text-left text-[12px] px-[18px]">
          <h2 className=" font-semibold text-[#828282] text-nowrap text-ellipsis">
            Anddy’s Makeover
          </h2>
          <p className="text-sm text-gray-400">
            ID: <span className="font-semibold">1234567</span>
          </p>
        </div>
        <Image src={chevronDown} alt="icon" className="mt-0.5" />
      </button>

      {open && (
        <div className="absolute top-[110%] right-0 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-10 overflow-hidden">
          <ul>
            <li
              onClick={() => handleAction("profile")}
              className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              My Profile
            </li>
            <li
              onClick={() => handleAction("logout")}
              className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
