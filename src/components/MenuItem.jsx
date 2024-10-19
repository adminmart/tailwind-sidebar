import * as React from "react";
import { SidebarContext } from "./Sidebar";
import { FaRegCircle } from "react-icons/fa6";
export const MenuItem = React.forwardRef(
    (
        {
            children,
            icon,
            link = "#",
            badge = false,
            badgeColor = "bg-blue-500",
            badgeContent = "6",
            textFontSize = "text-sm",
            borderRadius = "rounded-lg",
            disabled = false,
            badgeType = "filled",
            target = ""
        },
        ref
    ) => {
        const customizer = React.useContext(SidebarContext);


        return (
            <div className="flex items-center gap-4 mb-1">
                <a
                    href={link}
                    className={`flex items-center gap-3 p-2 ${borderRadius} ${disabled ? "cursor-default opacity-60" : "cursor-pointer"
                        } ${customizer.isCollapse ? "text-white" : customizer.textColor
                        } hover:bg-opacity-20 transition  `}
                    target={target}
                    ref={ref}
                >
                    <div className="flex justify-center items-center">
                        {icon ? icon : <FaRegCircle />}
                    </div>

                    {!customizer.isCollapse && (
                        <span className={`${textFontSize} leading-tight`}>
                            {children}
                        </span>
                    )}

                    {badge && (
                        <span
                            className={`inline-flex items-center justify-center ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded`}
                        >
                            {badgeContent}
                        </span>
                    )}
                </a>
            </div>
        );
    }
);
