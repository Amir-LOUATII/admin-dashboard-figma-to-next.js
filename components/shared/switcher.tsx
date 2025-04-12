"use client";

import { useState } from "react";

const ToggleSwitch = ({
  label = "Live",
  disabled = false,
}: {
  label?: string;
  disabled?: boolean;
}) => {
  const [enabled, setEnabled] = useState(false);
  const onToggle = () => {
    if (!disabled) {
      setEnabled((prevState) => !prevState);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onToggle}
        disabled={disabled}
        className={`relative w-[39px] h-[22px] rounded-full transition-colors duration-300 focus:outline-none
          ${enabled ? "bg-[#6FCF97]/20" : "bg-gray-300"}
          ${disabled ? "cursor-not-allowed opacity-50" : "hover:opacity-90"}`}
      >
        <span
          className={`absolute top-0 h-[22px] w-[22px] rounded-full transition-transform duration-300 transform
            ${enabled ? "bg-[#6FCF97]" : "bg-white"}
            ${enabled ? "right-0" : "left-0"}
            ${disabled ? "opacity-70" : ""}`}
        />
      </button>
      <span
        className={`text-[#828282] leading-[1.43] tracking-[0.04em] ${
          disabled ? "opacity-50" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default ToggleSwitch;
