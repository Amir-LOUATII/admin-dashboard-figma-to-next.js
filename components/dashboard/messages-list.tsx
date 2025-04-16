import { MessageCard } from "./message-card";

export const MessageList = () => {
  const messages = [
    {
      initial: "J",
      name: "James Robinson",
      message: "I need some maintenac...",
      timestamp: "Jan 2 , 12:31pm",
      bgColor: "bg-teal-400",
    },
    {
      initial: "E",
      name: "Eseosa Igbinobaro",
      message: "I got your email ad and ...",
      timestamp: "Wed, 06:00pm",
      bgColor: "bg-purple-700",
    },
    {
      initial: "J",
      name: "James Robinson",
      message: "I need some maintenac...",
      timestamp: "Jan 2 , 12:31pm",
      bgColor: "bg-teal-400",
    },
    {
      initial: "L",
      name: "Lupita Jonah",
      message: "Thank you so much for ...",
      timestamp: "Feb 13, 06:15pm",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      {messages.map((msg, index) => (
        <MessageCard key={index} {...msg} />
      ))}
    </div>
  );
};
