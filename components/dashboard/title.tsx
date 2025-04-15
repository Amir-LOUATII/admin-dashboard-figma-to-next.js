import Image from "next/image";
import React from "react";
import handIcon from "@/assets/icons/handEmoji.png";
export default function Title() {
  return (
    <div>
      <div className="flex gap-0.5 justify-start items-center mb-5">
        <Image
          src={handIcon}
          alt="hand"
          priority
          className="w-[22px] h-[22px]"
        />
        <h1 className="text-[#FFA14E] font-bold text-lg">Hey Anddy</h1>
      </div>
      <h2 className="text-2xl font-bold">
        You earned NGN 3 ,000,000 this month.
      </h2>
    </div>
  );
}
