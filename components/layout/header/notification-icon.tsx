import Image from "next/image";
import notificationIcon from "@/assets/icons/bellIcon.svg";
export default function NotificationIcon() {
  return (
    <div className="relative ">
      <div className="flex justify-center items-center w-[56px] h-[56px] bg-[#E0E0E0]/15 rounded-[10px] cursor-pointer">
        <Image src={notificationIcon} alt="bell" />
      </div>
      <span className="absolute top-0  bg-[#E5A0FF] w-[15px] h-[15px] rounded-[6px] z-50 right-0 translate-x-1/2 -translate-y-1/2"></span>
    </div>
  );
}
