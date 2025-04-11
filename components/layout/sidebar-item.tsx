"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SidebarItem({
  icon,
  text,
  href,
}: {
  icon: StaticImageData;
  text: string;
  href: string;
}) {
  return (
    <Link
      className="gap-0.5 flex justify-start items-center  transition-all duration-75  rounded  w-full capitalize"
      href={href}
    >
      <span className="  w-6 h-6 flex ju²stify-center items-center">
        {<Image src={icon} alt="icon" priority />}
      </span>
      <span
        className={`font-medium text-nowrap
       text-[#828282]
        `}
      >
        {text}
      </span>
    </Link>
  );
}
