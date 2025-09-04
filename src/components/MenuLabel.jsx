import * as React from 'react';
// import { SidebarContext } from './Sidebar';
import {

    SidebarGroupLabel,

} from "@/components/ui/sidebar";

export const MenuLabel = React.forwardRef(
    (
        {
            children,
            subHeading = 'menu',
        },

    ) => {
        // const customizer = React.useContext(SidebarContext);

        return (


            <SidebarGroupLabel className="text-xs font-bold">
                {/* {!customizer.isCollapse ? subHeading : "..."} */}
                {subHeading}
            </SidebarGroupLabel>


        );
    }
);