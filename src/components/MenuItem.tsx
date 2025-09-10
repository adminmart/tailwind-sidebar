import React from "react";
import { SidebarContext } from "./Sidebar";

import Links from "./Links";
import { CircleDot } from "lucide-react";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge"
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    component?: React.ElementType;
    badge?: boolean;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "default" | "outline" | "secondary" | "destructive";
    link?: string;
    target?: string;
    isSelected?: boolean;
    ClassName?: string;
    animation?: boolean;

}

export const AMMenuItem = ({
    children,
    icon,
    component,
    badge = false,
    badgeColor = "bg-primary",
    badgeTextColor = "",
    badgeContent = "New",
    textFontSize = "text-sm",
    borderRadius = "rounded-md",
    disabled = false,
    badgeType = "default",
    link = "#",
    target = "",
    isSelected = false,
    ClassName = "",



}: MenuItemProps) => {
    const customizer = React.useContext(SidebarContext);
    const isCollapse = customizer?.isCollapse;

    return (



        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Links to={link} component={component} target={target}>
                            <div
                                className={cn(
                                    "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5  ",
                                    customizer.animation && "hover:transform hover:translate-x-1 transition-all duration-200 ease-in-out",
                                    borderRadius,
                                    disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                                    isSelected
                                        ? "bg-primary text-white "
                                        : `text-${customizer.textColor} bg-transparent hover:bg-primary/20 `,
                                    ClassName
                                )}
                                style={{
                                    backgroundColor: isSelected ? customizer.themeColor : undefined,
                                    color: isSelected ? 'white' : customizer.textColor,
                                    justifyContent: customizer?.direction === "rtl" ? "flex-end" : "flex-start",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className={cn(
                                        "flex items-center justify-center transition-colors duration-200",
                                        !isCollapse && "min-w-[20px]",

                                    )}
                                    style={{
                                        color: isSelected ? "#fff" : customizer.textColor,
                                    }}
                                >
                                    {icon ?? <CircleDot size={18} />}
                                </div>

                                {/* Text + Badge */}
                                {!isCollapse && (
                                    <div className="flex items-center justify-between w-full ">
                                        <span className={cn(textFontSize, "leading-tight truncate")}>
                                            {children}
                                        </span>

                                        {badge && (
                                            <Badge
                                                variant={badgeType}
                                                className={cn(
                                                    badgeType !== "outline"
                                                        ? badgeColor
                                                        : isSelected
                                                            ? "bg-white"
                                                            : "bg-transparent",
                                                    badgeType !== "outline" ? badgeTextColor : "text-primary",
                                                )}
                                            >
                                                {badgeContent}
                                            </Badge>



                                        )}
                                    </div>
                                )}
                            </div>
                        </Links>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    );
};


