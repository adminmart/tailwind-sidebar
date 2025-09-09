import React from "react";
import { Sidebar as ShadSidebar } from "./ui/sidebar";

import { Profile } from "./UserProfile";
import clsx from "clsx";

type SidebarProps = {
    children: React.ReactNode;
    width?: string;
    collapsewidth?: string;
    textColor?: string;
    isCollapse?: boolean;
    themeColor?: string;
    themeSecondaryColor?: string;
    mode?: "light" | "dark";
    direction?: "ltr" | "rtl";
    userName?: string;
    designation?: string;
    showProfile?: boolean;
    userimg?: string;
    onLogout?: () => void;
    className?: string;
};

export const SidebarContext = React.createContext({
    width: "260px",
    collapsewidth: "80px",
    textColor: "#2b2b2b",
    isCollapse: false,
    themeColor: "#5d87ff",
    themeSecondaryColor: "#49beff",
    direction: "ltr",
});

let handleLogout = () => {
    alert("Logout Successfully");
};

export const Sidebar = ({
    children,
    width = "270px",
    collapsewidth = "80px",
    textColor = "#2b2b2b",
    isCollapse = false,
    themeColor = "#5d87ff",
    themeSecondaryColor = "#49beff",
    mode = "light",
    direction = "ltr",
    userName = "Mathew",
    designation = "Designer",
    showProfile = true,
    userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
    onLogout = handleLogout,
    className = "",
}: SidebarProps) => {
    const computedWidth = isCollapse ? collapsewidth : width;
    const modeClass = mode === "dark" ? "dark" : "";

    // Set textColor dynamically based on mode
    if (mode === "dark") {
        textColor = "rgba(255,255,255, 0.9)";
    }

    return (
        <SidebarContext.Provider
            value={{
                width,
                collapsewidth,
                themeColor,
                textColor,
                themeSecondaryColor,
                direction,
                isCollapse,
            }}
        >
            <div className={modeClass}>
                <ShadSidebar
                    dir={direction}
                    style={{ width: computedWidth, color: textColor }}
                    isCollapse={isCollapse}
                    width={width}
                    collapsewidth={collapsewidth}
                    collapsible="icon"
                    className={clsx("border-r border-border", className)}
                >
                    {children}
                    {showProfile && (
                        <Profile
                            userName={userName}
                            designation={designation}
                            userimg={userimg}
                            isCollapse={isCollapse}
                            onLogout={onLogout}
                        />

                    )}
                </ShadSidebar>
            </div>
        </SidebarContext.Provider>
    );
};
