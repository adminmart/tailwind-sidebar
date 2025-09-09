import React from "react";
import { SidebarContext } from "./Sidebar";

import Links from "./Links";
import { CircleDot } from "lucide-react";
import { cn } from "../lib/utils";

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
    badgeType?: "filled" | "outlined";
    link?: string;
    target?: string;
    isSelected?: boolean;
    className?: string;
}

export const MenuItem = ({
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
    badgeType = "filled",
    link = "/",
    target = "",
    isSelected = false,
    className,
}: MenuItemProps) => {
    const customizer = React.useContext(SidebarContext);
    const isCollapse = customizer?.isCollapse;

    return (


        <Links to={link} component={component} target={target}>
            <div
                className={cn(
                    "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5 transition-colors duration-200 hover:bg-primary/20",
                    borderRadius,
                    disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                    isSelected
                        ? "bg-primary text-white"
                        : "text-muted-foreground bg-transparent",
                    className
                )}

                style={{
                    backgroundColor: isSelected ? customizer.themeColor : undefined,
                    color: !isSelected ? customizer.textColor : 'white',
                    justifyContent: customizer?.direction === "rtl" ? "flex-end" : "flex-start",
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
                                        ? "border border-border bg-transparent"
                                        : badgeColor !== "bg-secondary"
                                            ? badgeColor
                                            : "",
                                    badgeTextColor ??
                                    (badgeType === "outlined" ? "text-primary" : "")
                                )}
                                style={{
                                    backgroundColor:
                                        badgeColor === "bg-secondary"
                                            ? customizer.themeSecondaryColor
                                            : undefined,
                                    color:
                                        badgeColor === "bg-secondary" && badgeTextColor === undefined && (badgeType === "outlined" || badgeColor === undefined)
                                            ? customizer.textColor
                                            : undefined,
                                }}
                            >
                                {badgeContent}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </Links>

    );
};


