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
    const activeBg = open ? customizer.themeColor : "";
    const hoverBg = open ? customizer.themeColor : `${customizer.themeColor}20`; // mimic +20 alpha
    const textColor = open ? "text-white" : customizer.textColor;

    return (

        // <div className="w-full">
        //     <Collapsible
        //         open={open}
        //         onOpenChange={setOpen}
        //         className="flex  flex-col"
        //     >
        //         <CollapsibleTrigger asChild>
        //             <button
        //                 disabled={disabled}
        //                 onClick={() => setOpen(!open)}
        //                 className={clsx(
        //                     "flex items-center justify-between rounded-md  p-2.5 transition-colors ",
        //                     borderRadius,

        //                     {
        //                         "cursor-not-allowed opacity-60 ": disabled,
        //                         "cursor-pointer": !disabled,
        //                         "justify-center px-3": customizer.isCollapse,
        //                         "justify-between": !customizer.isCollapse,
        //                     }

        //                 )}
        //                 style={{
        //                     color: open ? "#fff" : customizer?.textColor,
        //                     backgroundColor: open ? customizer?.themeColor : undefined,
        //                 }}
        //             >
        //                 {/* Icon + Title */}
        //                 <div className="flex items-center gap-3 ">
        //                     <span className="text-inherit">
        //                         {icon ? icon : <CircleDot size={20} />}
        //                     </span>

        //                     {/* Title */}
        //                     {!customizer?.isCollapse && (
        //                         <span className={clsx(textFontSize, "truncate leading-tight")}>
        //                             {title}
        //                         </span>
        //                     )}
        //                 </div>

        //                 {/* Chevron */}
        //                 {!customizer?.isCollapse &&
        //                     (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        //             </button>
        //         </CollapsibleTrigger>

        //         {/* Submenu Items */}

        //         <CollapsibleContent
        //             className={clsx(
        //                 "mt-1 flex flex-col space-y-1",
        //                 customizer?.isCollapse && "items-center"
        //             )}
        //         >
        //             {children}
        //         </CollapsibleContent>
        //     </Collapsible>
        // </div >
        <div className="w-full">
            <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col">
                <CollapsibleTrigger asChild>
                    <button
                        disabled={disabled}
                        onClick={() => setOpen(!open)}
                        className={clsx(
                            "group flex w-full items-center justify-between p-2.5 transition-colors duration-200",
                            borderRadius,
                            {
                                "opacity-60 cursor-not-allowed": disabled,
                                "cursor-pointer": !disabled,
                                "justify-center": customizer?.isCollapse,
                                "bg-[var(--active-bg)]": open,
                            }
                        )}
                        style={{
                            color: open ? "#fff" : customizer?.textColor,
                            backgroundColor: open ? customizer?.themeColor : undefined,

                        }}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className="text-inherit"
                                style={{
                                    color: open ? "#fff" : customizer?.textColor,
                                }}
                            >
                                {icon ? icon : <CircleDot size={20} />}
                            </span>

                            {!customizer?.isCollapse && (
                                <span
                                    className={clsx(
                                        textFontSize,
                                        "leading-tight truncate text-inherit"
                                    )}
                                >
                                    {title}
                                </span>
                            )}
                        </div>

                        {/* Chevron icon */}
                        {!customizer?.isCollapse &&
                            (open ? (
                                <ChevronDown
                                    size={16}
                                    className="text-inherit"
                                    style={{
                                        color: open ? "#fff" : customizer?.textColor,
                                    }}
                                />
                            ) : (
                                <ChevronRight
                                    size={16}
                                    className="text-inherit"
                                    style={{
                                        color: open ? "#fff" : customizer?.textColor,
                                    }}
                                />
                            ))}
                    </button>
                </CollapsibleTrigger>

                <CollapsibleContent
                    className={clsx(
                        "flex flex-col space-y-1 transition-all",
                        customizer?.isCollapse && "items-center",
                        "mt-1"
                    )}
                >
                    {children}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
