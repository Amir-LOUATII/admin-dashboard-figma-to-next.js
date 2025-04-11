"use client";
import { useState } from "react";
import SidebarItem from "./sidebar-item";
import Image, { StaticImageData } from "next/image";
import upArrow from "@/assets/icons/upArrow.svg";
import downArrow from "@/assets/icons/downArrow.svg";
export default function ContextMenu({
  sectionTitle,
  links,
}: {
  sectionTitle: string;
  links: {
    label: string;
    href: string;
    icon: StaticImageData;
  }[];
}) {
  const [expanded, setExpanded] = useState(false);
  function toggleMenu() {
    if (links.length) {
      setExpanded((prevState) => !prevState);
    }
  }
  return (
    <div className="w-full">
      <header
        className={`${
          expanded ? "mb-3.5" : ""
        }  w-full flex gap-2 justify-between items-center`}
      >
        <p
          className="text-[#828282]
leading-5 font-bold capitalize"
        >
          {sectionTitle}
        </p>
        <span className="cursor-pointer" onClick={toggleMenu} role="button">
          {expanded ? (
            <Image src={upArrow} alt="up" />
          ) : (
            <Image src={downArrow} alt="down" />
          )}
        </span>
      </header>
      <div className="flex flex-col justify-start space-y-3.5">
        {expanded &&
          links.map((item) => (
            <SidebarItem
              text={item.label}
              icon={item.icon}
              key={item.label}
              href={item.href}
            />
          ))}
      </div>
    </div>
  );
}
