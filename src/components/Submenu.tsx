// // components/sidebar/Submenu.tsx
// import React, { useState } from "react";
// import { ChevronRight, ChevronDown } from "lucide-react";

// export function Submenu({
//     title,
//     children,
// }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="w-full">
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="w-full flex items-center justify-between text-left text-sm font-medium px-3 py-2 rounded-md hover:bg-muted/30 transition-colors"
//             >
//                 <span>{title}</span>
//                 {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//             </button>

//             {open && (
//                 <div className="pl-4 border-l border-muted/30 ml-2 mt-1 space-y-1">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// }



import * as React from "react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "../components/ui/collapsible";
import { ChevronRight, ChevronDown, CircleDot } from "lucide-react";
import { SidebarContext } from "./Sidebar";
import clsx from "clsx";





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

        <div
            className={` ${customizer.isCollapse ? "px-2" : "px-4"
                }`}

        >
            <Collapsible open={open} onOpenChange={setOpen}>
                <CollapsibleTrigger asChild>
                    <button
                        disabled={disabled}
                        onClick={() => setOpen(!open)}
                        className={clsx(
                            "w-full  cursor-pointer flex items-center justify-between  py-2.5 px-3 mb-1 group transition-colors",
                            borderRadius,

                        )}
                        style={{
                            color: open ? "#fff" : customizer?.textColor,
                            backgroundColor: open ? customizer?.themeColor : undefined,

                        }}
                    >
                        {/* Icon + Title */}
                        <div className="flex items-center gap-3">
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
                        {!customizer?.isCollapse && (
                            open ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                        )}
                    </button>
                </CollapsibleTrigger>

                {/* Submenu Items */}
                <CollapsibleContent
                    className={clsx(
                        "ml-5 mt-1 border-l border-border space-y-1 pl-2",
                        customizer?.direction === "rtl" && "ml-0 mr-5 border-r pl-0 pr-2"
                    )}
                >
                    {children}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}




