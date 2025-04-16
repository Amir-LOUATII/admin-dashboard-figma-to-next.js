import React from "react";
import Tabs from "./tabs";
import { MessageList } from "./messages-list";

export default function Messages() {
  return (
    <div className="bg-[#F9F9F9] w-[324px] h-full rounded-tl-[75px]  pt-20">
      <Tabs />
      <MessageList />
    </div>
  );
}
