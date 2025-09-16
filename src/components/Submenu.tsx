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
import { useContext } from "react";

type SubmenuProps = {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  borderRadius?: string;
  textFontSize?: string;
  disabled?: boolean;
  ClassName?: string;
  collapseIcon?: React.ReactNode;
  expandIcon?: React.ReactNode;
};

export function AMSubmenu({
  title,
  children,
  icon,
  textFontSize = "text-sm",
  disabled = false,
  borderRadius = "rounded-md",
  ClassName = "",
  collapseIcon,
  expandIcon,
}: SubmenuProps) {
  const [open, setOpen] = React.useState(false);


  const { animation, textColor, themeColor, isCollapse } = useContext(SidebarContext);


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
              open ? "text-white" : `text-[${textColor}]`,
              animation && "hover:transform hover:translate-x-1",
              {
                "cursor-not-allowed opacity-50": disabled,
                "cursor-pointer": !disabled,
                // only apply hover styles if not disabled and not open
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground":
                  !disabled && !open,
              }
            )}
            style={{
              backgroundColor: open ? themeColor : undefined,
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-inherit">
                  {icon ? icon : <CircleDot size={20} />}
                </span>
                {!isCollapse && (
                  <span
                    className={clsx(textFontSize, "truncate leading-tight")}
                  >
                    {title}
                  </span>
                )}
              </div>

              {!isCollapse &&
                (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)


              }

            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent
          className={clsx(
            " flex flex-col",
            isCollapse && "items-center"
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
