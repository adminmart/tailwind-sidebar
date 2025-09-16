import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { SidebarGroupLabel } from "./ui/sidebar";
import { cn } from "src/lib/utils";
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
            <SidebarGroupLabel className={cn(customizer.textColor, ClassName)}>
                {/* Subheader */}

                {!customizer.isCollapse ? subHeading : "..."}

            </SidebarGroupLabel>

            <div>{children}</div>
        </div>
    );
};
