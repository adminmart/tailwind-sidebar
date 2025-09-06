
import React from "react";
import { SidebarContext } from "./Sidebar";
import { cn } from "../lib/utils";

import Links from "./Links";
import { CircleDot } from "lucide-react";



interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    link?: string;
    component?: React.ElementType;
    badge?: boolean;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "filled" | "outlined";
    target?: string;
    isSelected?: boolean;
}


export const MenuItem = ({
    children,
    icon,
    component,
    link = "/",
    badge = false,
    badgeColor = "bg-primary",
    badgeTextColor = "text-white",
    badgeContent = "New",
    textFontSize = "text-sm",
    borderRadius = "rounded-md",
    disabled = false,
    isSelected = false,
    badgeType = "filled",
    target = "",


}: MenuItemProps) => {
    const customizer = React.useContext(SidebarContext);
    const isCollapse = customizer?.isCollapse;




    return (




        <div className={`${customizer.isCollapse ? "px-2" : "px-4"}`}>
            <Links to={link} component={component} target={target}>
                <div
                    className={cn(
                        "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5 rounded-md transition-colors duration-200 hover:bg-primary",
                        borderRadius,
                        disabled
                            ? "cursor-not-allowed opacity-60"
                            : "cursor-pointer hover:bg-opacity-20",
                        isSelected
                            ? "bg-primary text-white"
                            : "text-muted-foreground bg-transparent"
                    )}
                    style={{
                        backgroundColor: isSelected ? customizer.themeColor : undefined,
                        color: !isSelected ? customizer.textColor : undefined,
                        justifyContent: customizer?.direction === "rtl" ? "flex-end" : "flex-start"
                    }}
                >
                    {/* Icon */}
                    <div
                        className={cn(
                            "flex items-center justify-center",
                            !isCollapse && "min-w-[20px]"
                        )}
                        style={{
                            color: isSelected ? "#fff" : customizer.textColor,
                        }}
                    >
                        {icon ?? <CircleDot size={18} />}
                    </div>

                    {/* Text + Badge */}
                    {!isCollapse && (
                        <div className="flex items-center justify-between w-full">
                            <span className={cn(textFontSize, "leading-tight truncate")}>
                                {children}
                            </span>

                            {badge && (
                                <span
                                    className={cn(
                                        "ml-auto px-2 py-0.5 rounded text-xs font-semibold",
                                        badgeType === "outlined"
                                            ? "border border-current bg-transparent"
                                            : badgeColor,
                                        badgeTextColor
                                    )}
                                >
                                    {badgeContent}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </Links>
        </div>

    );
};
