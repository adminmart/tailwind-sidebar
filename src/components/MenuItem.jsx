// components/MenuItem.jsx
import React from "react";
import { SidebarContext } from "./Sidebar";
import { cn } from "@/lib/utils";

import { Link } from "react-router";
import { Icon } from "@iconify/react";

export const MenuItem = ({
    children,
    icon,
    link = "#",
    badge = false,
    badgeColor = "bg-blue-500",
    badgeTextColor = "text-white",
    badgeContent = "6",
    textFontSize = "text-sm",
    borderRadius = "rounded-lg",
    disabled = false,
    isSelected = false,
    badgeType = "filled", // support "outlined" later
    target = "",
    asChild = false,
}) => {
    const customizer = React.useContext(SidebarContext);
    const isCollapse = customizer?.isCollapse;

    return (
        <div className="mb-1">
            <Link
                to={link}
                target={target}
                className={cn(
                    "flex items-center w-full gap-4 py-2.5 px-3 transition-all",
                    borderRadius,
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "hover:bg-opacity-20 hover:bg-primary hover:text-primary",
                    isSelected ? "bg-primary text-white" : "",
                    isCollapse ? "justify-center" : "justify-start",
                    customizer?.textColor
                )}
            >
                {/* Icon */}
                <div className="min-w-[20px]">{icon ? icon : <Icon icon="solar:stop-circle-linear" />}</div>

                {/* Label + Badge */}
                {!isCollapse && (
                    <div className="flex items-center justify-between w-full">
                        <span className={`${textFontSize} leading-tight`}>{children}</span>

                        {badge && (
                            <span
                                className={cn(
                                    "ml-auto px-2 py-0.5 rounded text-xs font-bold",
                                    badgeColor,
                                    badgeTextColor,
                                    badgeType === "outlined"
                                        ? "border bg-transparent"
                                        : "bg-opacity-100"
                                )}
                            >
                                {badgeContent}
                            </span>
                        )}
                    </div>
                )}
            </Link>
        </div>
    );
};
