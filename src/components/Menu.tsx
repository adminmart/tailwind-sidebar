import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { SidebarGroupLabel } from "./ui/sidebar";
type MenuProps = {
    children?: React.ReactNode;
    subHeading?: string;
    className?: string;
};

export const Menu = ({ children, subHeading = "menu", className }: MenuProps) => {
    const customizer = useContext(SidebarContext);

    return (

        <div >
            <SidebarGroupLabel className={className}
            >
                {/* Subheader */}
                <div
                    className={`text-xs font-bold leading-5 py-1`} style={{ color: customizer.textColor }}
                >
                    {!customizer.isCollapse ? subHeading : "..."}
                </div>
            </SidebarGroupLabel>
            {/* List of items */}
            <div className="space-y-1">
                {children}
            </div>
        </div>


    );
};
