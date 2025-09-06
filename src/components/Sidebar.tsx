// import React from "react";
// import { createContext } from "react";
// import { Profile } from "./UserProfile";

// export const SidebarContext = createContext({
//     width: "270px",
//     collapsewidth: "80px",
//     textColor: "#8D939D",
//     isCollapse: false,
//     themeColor: "#5d87ff",
// });

// export const Sidebar = React.forwardRef(
//     (
//         {
//             children,
//             width = "260px",
//             collapsewidth = "80px",
//             textColor = "#2b2b2b",
//             isCollapse = false,
//             themeColor = "#5d87ff",
//             themeSecondaryColor = "#49beff",
//             mode = "light",
//             direction = "ltr",
//             userName = "Mathew",
//             designation = "Designer",
//             showProfile = true,
//             userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
//         },
//         ref
//     ) => {
//         const [isSidebarHover, setIsSidebarHover] = React.useState(false);
//         const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;



//         const currentTextColor = mode === "dark" ? "text-white" : textColor;

//         return (

//             <div
//                 ref={ref}
//                 className={`flex flex-col transition-width duration-300 border-r h-screen`}
//                 style={{ width: toggleWidth, color: currentTextColor, }}
//                 onMouseEnter={() => setIsSidebarHover(true)}
//                 onMouseLeave={() => setIsSidebarHover(false)}
//             >

//                 <div className="h-full">
//                     <SidebarContext.Provider value={{ textColor, isCollapse, width, collapsewidth, themeColor }}>
//                         {children}
//                     </SidebarContext.Provider>
//                     {showProfile && (
//                         <Profile userName={userName} designation={designation} userimg={userimg} isCollapse={isCollapse} />
//                     )}
//                 </div>

//             </div >
//         );
//     }
// );




// import React from "react"
// import {
//     Sidebar as ShadSidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarMenu,
//     SidebarFooter, SidebarHeader, SidebarGroupLabel
// } from "@/components/ui/sidebar"
// import { Profile } from './UserProfile'

// import { Icon } from '@iconify/react';

// import {
//     Collapsible,
//     CollapsibleContent,
//     CollapsibleTrigger,
// } from "@/components/ui/collapsible";

// export const Sidebar = ({
//     width = "270px",
//     collapseWidth = "80px",
//     items,
//     logo,
//     showProfile = false,
//     isCollapse = false,
//     userName = "Mathew",
//     designation = "Designer",
//     userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
//     onLogout = () => alert("Logout Successfully"),
//     themeColor = "#5d87ff",
//     textColor = "#2b2b2b",
//     mode = "light",
//     direction = "ltr",
// }) => {



//     return (
//         <ShadSidebar style={{
//             width: isCollapse ? collapseWidth : width, direction: direction,
//             color: textColor,
//             backgroundColor: themeColor,

//         }} className={`${mode === "dark" ? "dark" : ""}`} >
//             <SidebarContent className="flex flex-col h-full">
//                 {/* Header Logo */}
//                 {logo && <SidebarHeader> {React.cloneElement(logo, { isCollapse })}
//                 </SidebarHeader>}


//                 {/* Navigation Items */}
//                 <SidebarGroup>

//                     <SidebarMenu>
//                         {items.map((item, index) => (
//                             <React.Fragment key={item.title || `subheader-${index}`}>
//                                 {item.subheader && (
//                                     <SidebarGroupLabel>{item.subheader}</SidebarGroupLabel>
//                                 )}

//                                 {item.title && (
//                                     <>
//                                         {item.children ? (
//                                             <Collapsible className="group/collapsible">
//                                                 <SidebarGroupLabel asChild>
//                                                     <CollapsibleTrigger >
//                                                         {item.icon && <Icon icon={item.icon} className="h-4 w-4 mr-2" />}
//                                                         {!isCollapse && (
//                                                             <>
//                                                                 <span >{item.title}</span>
//                                                                 {/* <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /> */}

//                                                                 <Icon icon="solar:alt-arrow-down-linear" className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                                                             </>
//                                                         )}
//                                                     </CollapsibleTrigger>
//                                                 </SidebarGroupLabel>
//                                                 <CollapsibleContent className="pl-4">
//                                                     {item.children.map((child) => (
//                                                         <div key={child.title}>
//                                                             <a
//                                                                 href={child.url}
//                                                                 className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
//                                                             >
//                                                                 {!isCollapse && <span>{child.title}</span>}
//                                                             </a>

//                                                             {/* Only one level deep nesting supported */}
//                                                             {child.children && (
//                                                                 <div className="pl-4">
//                                                                     {child.children.map((subchild) => (
//                                                                         <a
//                                                                             key={subchild.title}
//                                                                             href={subchild.url}
//                                                                             className=" block px-4 py-2 text-sm text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
//                                                                         >
//                                                                             {!isCollapse && <span>{subchild.title}</span>}
//                                                                         </a>
//                                                                     ))}
//                                                                 </div>
//                                                             )}
//                                                         </div>
//                                                     ))}
//                                                 </CollapsibleContent>
//                                             </Collapsible>
//                                         ) : (
//                                             <a
//                                                 href={item.url}
//                                                 className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${isCollapse ? "justify-center" : ""
//                                                     }`}
//                                             >
//                                                 {/* {item.icon && <Icon icon={item.icon} className="h-4 w-4" />} */}
//                                                 <Icon icon={item.icon} height={21} />
//                                                 {!isCollapse && <span>{item.title}</span>}
//                                             </a>
//                                         )}
//                                     </>
//                                 )}
//                             </React.Fragment>
//                         ))}

//                     </SidebarMenu>
//                 </SidebarGroup>

//                 {/* Footer Profile */}

//                 {showProfile && !isCollapse && (
//                     <SidebarFooter className="mt-auto">
//                         <Profile
//                             userName={userName}
//                             designation={designation}
//                             userimg={userimg}
//                             isCollapse={isCollapse}
//                             onLogout={onLogout}
//                         />
//                     </SidebarFooter>
//                 )}
//             </SidebarContent>
//         </ShadSidebar >
//     )
// }













import React from "react";
import {
    Sidebar as ShadSidebar,
    SidebarFooter,
} from "./ui/sidebar";

import { Profile } from "./UserProfile";

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
};


export const SidebarContext = React.createContext({
    width: "270px",
    collapsewidth: "80px",
    textColor: "#8D939D",
    isCollapse: false,
    themeColor: "#5d87ff",
    themeSecondaryColor: "#49beff",
    direction: 'ltr'
});

let handleLogout = () => {
    alert("Logout Successfully");
};

export const Sidebar = ({
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
    onLogout = handleLogout,
}: SidebarProps) => {
    const computedWidth = isCollapse ? collapsewidth : width;
    const modeClass = mode === "dark" ? "dark" : "";

    // Set textColor dynamically based on mode
    if (mode === "dark") {
        textColor = "rgba(255,255,255, 0.9)";
    }
    return (
        <SidebarContext.Provider
            value={{ width, collapsewidth, themeColor, textColor, themeSecondaryColor, direction, isCollapse }}
        >
            <div className={modeClass}>
                <ShadSidebar
                    dir={direction}
                    style={{ width: computedWidth, color: textColor }}
                    collapsible="icon"
                    className="border-r border-border"
                >
                    {children}

                    {showProfile && (
                        <SidebarFooter>
                            <Profile
                                userName={userName}
                                designation={designation}
                                userimg={userimg}
                                isCollapse={isCollapse}
                                onLogout={onLogout}
                            />
                        </SidebarFooter>
                    )}
                </ShadSidebar>
            </div>
        </SidebarContext.Provider>
    );
};





