import * as React from "react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "../components/ui/collapsible";
import { ChevronRight, ChevronDown, CircleDot } from "lucide-react";
import { SidebarContext } from "./Sidebar";
import clsx from "clsx";
import { SidebarGroupContent, SidebarMenu, SidebarMenuItem } from "./ui/sidebar";

type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
};
export function Submenu({
    title,
    children,
    icon,
    textFontSize = "text-sm",
    disabled = false,
    borderRadius = "rounded-md",
}: SubmenuProps) {
    const [open, setOpen] = React.useState(false);
    const customizer = React.useContext(SidebarContext);

    return (
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <div className="w-full">
                        <Collapsible
                            open={open}
                            onOpenChange={setOpen}
                            className="flex  flex-col px-3"
                        >
                            <CollapsibleTrigger asChild>
                                <button
                                    disabled={disabled}
                                    onClick={() => setOpen(!open)}
                                    className={clsx(
                                        "flex items-center justify-between rounded-md  p-2.5 transition-colors ",
                                        borderRadius,

                                        {
                                            "cursor-not-allowed opacity-60 ": disabled,
                                            "cursor-pointer": !disabled,
                                            "justify-center px-3": customizer.isCollapse,
                                            "justify-between": !customizer.isCollapse,
                                        }

                                    )}
                                    style={{
                                        color: open ? "#fff" : customizer?.textColor,
                                        backgroundColor: open ? customizer?.themeColor : undefined,
                                    }}
                                >
                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-3 ">
                                        <span className="text-inherit">
                                            {icon ? icon : <CircleDot size={20} />}
                                        </span>

                                        {/* Title */}
                                        {!customizer?.isCollapse && (
                                            <span className={clsx(textFontSize, "truncate leading-tight")}>
                                                {title}
                                            </span>
                                        )}
                                    </div>

                                    {/* Chevron */}
                                    {!customizer?.isCollapse &&
                                        (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
                                </button>
                            </CollapsibleTrigger>

                            {/* Submenu Items */}

                            <CollapsibleContent
                                className={clsx(
                                    "mt-1 flex flex-col space-y-1",
                                    customizer?.isCollapse && "items-center"
                                )}
                            >
                                {children}
                            </CollapsibleContent>
                        </Collapsible>
                    </div >
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    );
}
