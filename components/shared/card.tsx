import { ReactNode } from "react";

export default function Card({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-sm">
      {title && <h2 className="mb-8 font-bold text-[#333333]">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
