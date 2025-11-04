import React, { useEffect } from "react";
import { Sidebar as ShadSidebar, SidebarContent, SidebarGroup, SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import { AMProfile } from "./UserProfile";
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
    animation?: boolean;
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
    showTrigger?: boolean
};

export const SidebarContext = React.createContext({
    width: "260px",
    collapsewidth: "80px",
    textColor: "#2b2b2b",
    isCollapse: false,
    themeColor: "#5d87ff",
    themeSecondaryColor: "#49beff",
    direction: "ltr",
    animation: false,
});

let handleLogout = () => {
    alert("Logout Successfully");
};

export const AMSidebar = ({
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
    animation = false,
    className = "",
    side = "left",
    variant = "sidebar",
    collapsible = "icon",
    showTrigger = false
}: SidebarProps) => {
    const computedWidth = isCollapse ? collapsewidth : width;
    console.log(mode)

    useEffect(() => {
    document.documentElement.style.setProperty("--lightprimary", `${themeColor}2a`);
    document.documentElement.style.setProperty("--sidebar-primary", themeColor);
    document.documentElement.style.setProperty("--sidebar-txtclr", textColor);
  }, [themeColor]);

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
      animation,
    }}
  >
    <SidebarProvider>
      {showTrigger && <SidebarTrigger />}
      <div>
        <ShadSidebar
          dir={direction}
          style={{ width: computedWidth, color: textColor }}
          isCollapse={isCollapse}
          width={width}
          collapsewidth={collapsewidth}
          collapsible={collapsible}
          variant={variant}
          side={side}
          className={clsx("border-r border-border ", animation && "transition-all duration-300 ease-in-out", className)}
        >
          <SidebarContent className="!px-0" >
            <SidebarGroup>
            {children}
            </SidebarGroup>
          </SidebarContent>

          {showProfile && (
            <AMProfile
              userName={userName}
              designation={designation}
              userimg={userimg}
              isCollapse={isCollapse}
              onLogout={onLogout}
            />
          )}
        </ShadSidebar>
      </div>
    </SidebarProvider>
  </SidebarContext.Provider>
    );
};
