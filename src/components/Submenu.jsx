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


// components/sidebar/Submenu.tsx
import * as React from "react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn utility (optional)
import { Icon } from '@iconify/react';


export function Submenu({
    title,
    children,
    icon,
    textFontSize = "text-sm",
    disabled = false,
    borderRadius = "8px",
}) {
    const [open, setOpen] = React.useState(false);

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
                <button
                    disabled={disabled}
                    className={cn(
                        "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md transition group",
                        "hover:bg-muted/40 text-muted-foreground",
                        open ? "bg-primary/80 text-white" : "",
                        disabled ? "opacity-50 cursor-not-allowed" : "",
                        borderRadius
                    )}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground">
                            {icon ? icon : <Icon icon="solar:stop-circle-linear" />}
                        </span>
                        <span className={`${textFontSize} group-hover:text-foreground`}>
                            {title}
                        </span>
                    </div>

                    {open ? (
                        <ChevronDown size={16} className="transition" />
                    ) : (
                        <ChevronRight size={16} className="transition" />
                    )}
                </button>
            </CollapsibleTrigger>

            <CollapsibleContent
                className="ml-5 mt-1 pl-2 border-l border-border space-y-1"
            >
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}
