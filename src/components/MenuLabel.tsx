import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { SidebarGroupLabel } from "./ui/sidebar";
type MenuProps = {
    children?: React.ReactNode;
    subHeading?: string;
};

export const MenuLabel = ({ children, subHeading = "menu" }: MenuProps) => {
    const customizer = useContext(SidebarContext);

    return (



        <div className={`pt-2 ${customizer.isCollapse ? "px-2" : "px-4"}`}>
            <SidebarGroupLabel
                className="text-xs font-bold leading-5 p-0"
                style={{ color: customizer.textColor }}
            >
                {!customizer.isCollapse ? subHeading : "..."}
            </SidebarGroupLabel>



            <div className="space-y-1">{children}</div>



        </div>



    );
};
