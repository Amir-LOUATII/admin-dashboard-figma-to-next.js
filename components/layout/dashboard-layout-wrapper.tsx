import Navbar from "./header/navbar";
import Sidebar from "./sidebar";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-start items-start min-h-screen">
      <Sidebar />
      <div className="flex-1 w-full ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
