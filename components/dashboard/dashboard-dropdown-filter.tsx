"use client";

import { useState } from "react";
import Image from "next/image";
import arrowDown from "@/assets/icons/arrowDown.svg";
const DashboardDropdownFilter = () => {
  const [selectedOption, setSelectedOption] = useState("Last 30 days");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Last 7 days", "Last 30 days", "Last 90 days"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log("Selected:", option);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#828282] font-semibold">{selectedOption}</h3>
        <button className="w-9 h-9 rounded-[10px] flex justify-center items-center bg-[#FAF2FF]">
          <div className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            <Image src={arrowDown} alt="Dropdown arrow" width={12} height={8} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white z-10 border">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-[#FAF2FF] hover:text-[#BB6BD9] cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardDropdownFilter;
