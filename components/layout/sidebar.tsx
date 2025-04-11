import { links } from "@/utils/links";
import ContextMenu from "./context-menu";
import SidebarItem from "./sidebar-item";
export default function Sidebar() {
  return (
    <aside className="w-[214px] h-screen flex flex-col justify-start items-start bg-white shadow-sm p-4">
      <header className="mb-10">
        <p className="text-[#484A4F]  text-[32px] font-extrabold">Payd</p>
      </header>
      <div className="w-full">
        <div className="flex flex-col justify-start items-center gap-[24px] mt-[24px] w-full">
          {links.map((link) => {
            if (link.children) {
              return (
                <ContextMenu
                  sectionTitle={link.sectionTitle}
                  key={link.sectionTitle}
                  links={link.children}
                />
              );
            } else
              return (
                <SidebarItem
                  text={link.label}
                  icon={link.icon}
                  key={link.label}
                  href={link.href}
                />
              );
          })}
        </div>
      </div>
    </aside>
  );
}
