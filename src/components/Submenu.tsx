import * as React from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import { ChevronRight, ChevronDown, CircleDot } from "lucide-react";
import { SidebarContext } from "./Sidebar";
import clsx from "clsx";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

type SubmenuProps = {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  borderRadius?: string;
  textFontSize?: string;
  disabled?: boolean;
  ClassName?: string;

};

export function AMSubmenu({
  title,
  children,
  icon,
  textFontSize = "text-sm",
  disabled = false,
  borderRadius = "rounded-md",
  ClassName = "",

}: SubmenuProps) {
  const [open, setOpen] = React.useState(false);
  const customizer = React.useContext(SidebarContext);

  return (
    <div className={clsx("w-full", ClassName)}>
      <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col">
        <CollapsibleTrigger asChild>
          <button
            disabled={disabled}
            onClick={() => setOpen(!open)}
            className={clsx(
              "p-2.5 transition-all duration-200 ease-in-out flex items-center gap-3",
              borderRadius,
              open ? "text-white" : `text-[${customizer.textColor}]`,
              customizer?.animation && "",
              {
                "cursor-not-allowed opacity-50": disabled,
                "cursor-pointer": !disabled,
              }
            )}
            style={{
              backgroundColor: open ? customizer?.themeColor : undefined,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";
              e.currentTarget.style.backgroundColor = !disabled && open ? customizer.themeColor : `${customizer.themeColor}1a`;
              e.currentTarget.style.color = !disabled && open ? "white" : `${customizer.themeColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.backgroundColor = !disabled && open ? customizer.themeColor : `${customizer.themeColor}00`;
              e.currentTarget.style.color = !disabled && open ? "white" : `${customizer.textColor}`;
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-inherit">
                  {icon ? icon : <CircleDot size={20} />}
                </span>
                {!customizer?.isCollapse && (
                  <span
                    className={clsx(textFontSize, "truncate leading-tight")}
                  >
                    {title}
                  </span>
                )}
              </div>

              {!customizer?.isCollapse &&
                (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)

              }

            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent
          className={clsx(
            " flex flex-col",
            customizer?.isCollapse && "items-center"
          )}
        >
          <SidebarGroupContent>
            <SidebarMenu>
              {React.Children.map(children, (child, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>{child}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
