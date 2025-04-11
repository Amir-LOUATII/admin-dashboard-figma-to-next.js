import Image from "next/image";
import React from "react";
import searchIcon from "@/assets/icons/searchIcon.svg";
export default function SearchInput() {
  return (
    <div className="relative ">
      <input
        type="text"
        className="w-[440px] h-[56px] rounded-[50px] bg-[#FCFCFC] placeholder:text-[#BBBBBB] focus:placeholder:opacity-0 pl-16 outline-none"
        placeholder="Search for anything..."
      />
      <span className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer">
        <Image src={searchIcon} alt="searchIcon" priority />
      </span>
    </div>
  );
}
