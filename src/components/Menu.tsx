import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { SidebarGroupLabel } from "./ui/sidebar";
type MenuProps = {
    children?: React.ReactNode;
    subHeading?: string;
    ClassName?: string;
};

export const AMMenu = ({
    children,
    subHeading = "menu",
    ClassName,
}: MenuProps) => {
    const customizer = useContext(SidebarContext);

    return (
        <div>
            <SidebarGroupLabel className={ClassName}>
                {/* Subheader */}
                <div style={{ color: customizer.textColor }}>
                    {!customizer.isCollapse ? subHeading : "..."}
                </div>
            </SidebarGroupLabel>

            <div>{children}</div>
        </div>
    );
};
