import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { SidebarGroupLabel } from "./ui/sidebar";
type MenuProps = {
    children?: React.ReactNode;
    subHeading?: string;
};

export const Menu = ({ children, subHeading = "menu" }: MenuProps) => {
    const customizer = useContext(SidebarContext);

    return (

        <div >
            <SidebarGroupLabel>
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
