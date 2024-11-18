import React from "react";
import { createContext } from "react";
import { Profile } from "./UserProfile";

export const SidebarContext = createContext({
    width: "270px",
    collapsewidth: "80px",
    textColor: "#8D939D",
    isCollapse: false,
    themeColor: "#5d87ff",
});

export const Sidebar = React.forwardRef(
    (
        {
            children,
            width = "260px",
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
        },
        ref
    ) => {
        const [isSidebarHover, setIsSidebarHover] = React.useState(false);
        const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;



        const currentTextColor = mode === "dark" ? "text-white" : textColor;

        return (

            <div
                ref={ref}
                className={`flex flex-col transition-width duration-300 border-r h-screen`}
                style={{ width: toggleWidth, color: currentTextColor, }}
                onMouseEnter={() => setIsSidebarHover(true)}
                onMouseLeave={() => setIsSidebarHover(false)}
            >

                <div className="h-full">
                    <SidebarContext.Provider value={{ textColor, isCollapse, width, collapsewidth, themeColor }}>
                        {children}
                    </SidebarContext.Provider>
                    {showProfile && (
                        <Profile userName={userName} designation={designation} userimg={userimg} isCollapse={isCollapse} />
                    )}
                </div>

            </div >
        );
    }
);
