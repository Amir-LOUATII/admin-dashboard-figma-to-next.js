"use client";
const ToggleSwitch = ({
  label = "Live",
  enabled = true,
  onToggle,
}: {
  label?: string;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onToggle?.(!enabled)}
        className={`relative w-[39px] h-[22px] transition-colors duration-300 focus:outline-none rounded-full ${
          enabled ? "bg-[#6FCF97]/20" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0  h-[22px] w-[22px] rounded-full bg-[#6FCF97] transition-transform duration-300 transform ${
            enabled ? "left-full -translate-x-full" : "left-0"
          }`}
        />
      </button>
      <span className="text-[#828282] leading-[1.43] tracking-[0.04em]">
        {label}
      </span>
    </div>
  );
};

export default ToggleSwitch;
