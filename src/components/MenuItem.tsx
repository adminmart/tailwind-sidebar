import React, { useContext, useEffect } from "react";
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
    // const customizer = React.useContext(SidebarContext);
    // const isCollapse = customizer?.isCollapse;
    const { animation, textColor, themeColor, isCollapse } = useContext(SidebarContext);

    useEffect(() => {
        console.log("Animation from context:", animation);
    }, [animation]);
    return (



        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem >
                    <Links to={link} component={component} target={target}>
                        <SidebarMenuButton asChild variant={variant} size={size} isActive={isSelected} >
                            <div
                                className={cn(
                                    "h-full whitespace-nowrap ",
                                    animation && "hover:transform hover:translate-x-1 transition-all duration-200 ease-in-out",
                                    borderRadius,
                                    isSelected ? "text-white " : `text-[${textColor}]`,

                                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                                    ClassName
                                )}
                                style={{
                                    backgroundColor: isSelected ? themeColor : undefined,


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
                                                    badgeTextColor
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





