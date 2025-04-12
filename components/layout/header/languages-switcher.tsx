"use client";
import Image from "next/image";
import { useState } from "react";
import chevronDown from "@/assets/icons/chevronDownIcon.svg";
export default function LanguagesSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");
  const languages = ["English", "French", "Spanish"];

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (lang: string) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative w-[166px] h-[56px]">
      <button
        onClick={toggleDropdown}
        className="w-full h-[56px] rounded-full flex justify-center gap-1.5 items-center border  px-4 border-[#F2F2F2]"
      >
        <span className="text-[#BDBDBD] leading-[1.43]">{selected}</span>
        <span className="flex justify-center items-center mt-0.5">
          <Image src={chevronDown} alt="icon" />
        </span>
      </button>

      {open && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow z-10 overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected === lang ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
