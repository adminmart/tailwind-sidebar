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
            background = "bg-indigo-400",
            text = "text-indigo-400",
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
                    className={`flex gap-4 py-2.5 px-3 items-center w-full ${borderRadius} ${disabled ? "cursor-default opacity-60" : "cursor-pointer"
                        } ${customizer.isCollapse ? "text-white" : customizer.textColor
                        } hover:bg-opacity-20 hover:${background} hover:${text} transition`}
                    target={target}
                    ref={ref}
                >
                    <div>
                        {icon ? icon : <FaRegCircle />}
                    </div>

                    <div className="flex-1">
                        {!customizer.isCollapse && (
                            <span className={`${textFontSize} leading-tight`}>
                                {children}
                            </span>
                        )}
                    </div>

                    <div>
                        {badge && (
                            <span
                                className={`inline-flex items-center justify-center ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded`}
                            >
                                {badgeContent}
                            </span>
                        )}
                    </div>
                </a>
            </div>
        );
    }
);
