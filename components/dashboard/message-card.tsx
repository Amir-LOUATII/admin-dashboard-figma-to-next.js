import Image from "next/image";
import rightArrow from "@/assets/icons/rightArrow.svg";
type MessageCardProps = {
  initial: string;
  name: string;
  message: string;
  timestamp: string;
  bgColor: string;
};

export const MessageCard = ({
  initial,
  name,
  message,
  timestamp,
  bgColor,
}: MessageCardProps) => (
  <div className=" bg-white rounded-[20px] shadow p-4 mb-4 w-full max-w-md gap-4">
    <div className="flex gap-3 justify-between items-center mb-4">
      <div
        className={`flex items-center justify-center w-[35px] h-[35px] rounded-[10px] text-white text-sm font-semibold ${bgColor}`}
      >
        {initial}
      </div>
      <span className="text-[8px] text-[#BDBDBD] mb-2 font-bold">
        {timestamp}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-[#333333] font-semibold text-xs">{name}</span>
        <span className="text-[#BDBDBD] text-[10px] truncate max-w-[180px] font-semibold">
          {message}
        </span>
      </div>
      <Image src={rightArrow} alt=">" />
    </div>
  </div>
);
