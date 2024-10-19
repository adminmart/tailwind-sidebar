import React, { useState, useContext } from 'react';
import { SidebarContext } from './Sidebar';
import { FaAngleDown, FaAngleUp, FaRegCircle } from 'react-icons/fa';

export const Submenu = React.forwardRef(
    (
        {
            children,
            title = "",
            icon,
            borderRadius = "rounded-lg",
            textFontSize = "text-sm",
            disabled = false,
        },
        ref
    ) => {
        const customizer = useContext(SidebarContext);
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(prevOpen => !prevOpen);
        };

        return (
            <div>
                <div
                    onClick={handleClick}
                    className={`flex items-center gap-4 p-2 ${borderRadius} ${disabled ? "cursor-default opacity-60" : "cursor-pointer"}
                        ${open ? "bg-blue-600 text-white" : customizer.textColor} transition`}
                >
                    <div className="flex items-center">
                        {icon ? icon : <FaRegCircle />}
                    </div>

                    {!customizer.isCollapse && (
                        <span className={`${textFontSize} leading-tight`}>
                            {title}
                        </span>
                    )}

                    {!customizer.isCollapse && (open ? <FaAngleUp /> : <FaAngleDown />)}
                </div>

                {/* Only render children when 'open' is true */}
                {open && (
                    <div className="pl-6">
                        {children}
                    </div>
                )}
            </div>
        );
    }
);
