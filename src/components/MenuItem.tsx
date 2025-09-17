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
    badgeType?: "default" | "secondary" | "destructive" | "outline";
    link?: string;
    target?: string;
    isSelected?: boolean;
    ClassName?: string;
    variant?: "default" | "outline"
    size?: "default" | "sm" | "lg"
}

export const AMMenuItem = ({
    children,
    icon,
    component,
    badge = false,
    badgeColor = "",
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
    variant = "default",
    size = "default",



}: MenuItemProps) => {
    const customizer = React.useContext(SidebarContext);
    const isCollapse = customizer?.isCollapse;

    return (



        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem >
                    <Links to={link} component={component} target={target}>
                        <SidebarMenuButton asChild variant={variant} size={size} isActive={isSelected} >
                            <div
                                className={cn(
                                    "h-full whitespace-nowrap transition-all duration-200 ease-in-out",
                                    borderRadius,
                                    isSelected ? "text-white " : `text-[${customizer.textColor}]`,

                                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                                    ClassName
                                )}
                                style={{
                                    backgroundColor: isSelected ? customizer.themeColor : undefined,
                                    transition: "transform 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateX(4px)";
                                    e.currentTarget.style.backgroundColor = isSelected ? customizer.themeColor : `${customizer.themeColor}1a`; 
                                    e.currentTarget.style.color = isSelected ? "white" : `${customizer.themeColor}`; 
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateX(0)";
                                    e.currentTarget.style.backgroundColor = isSelected ? customizer.themeColor : `${customizer.themeColor}00`;
                                    e.currentTarget.style.color = isSelected ? "white" : `${customizer.textColor}`;
                                }}

                            >
                                {/* Icon */}
                                <div
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
                                                    badgeColor,
                                                    badgeTextColor,
                                                    
                                                )}
                                            >
                                                {badgeContent}
                                            </Badge>



                                        )}
                                    </div>
                                )}
                            </div>
                        </SidebarMenuButton>
                    </Links>

                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent >


    );
};





