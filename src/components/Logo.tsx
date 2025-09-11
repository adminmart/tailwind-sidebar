import React from "react";
import { SidebarContext } from "./Sidebar";
import Link from "./Links";
import { SidebarHeader } from "./ui/sidebar";

type LogoProps = {
    children?: React.ReactNode;
    img?: string;
    href?: string;
    component?: React.ElementType;
};

export const AMLogo = ({
    children,
    img = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png",
    href = "/",
    component,
}: LogoProps) => {
    const customizer = React.useContext(SidebarContext);

    return (
        <SidebarHeader>
            <div
                className={`min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1  py-2  overflow-ellipsis ${customizer.direction === "rtl" && customizer.isCollapse === false ? ' rtl:scale-x-[-1]' : ''} ${customizer.isCollapse === false ? 'justify-end' : 'justify-start'} ${customizer.direction === "ltr" && 'justify-start'} `}
            >
                <Link
                    href={href}
                    component={component}
                    to={href}
                    className={`w-[40px] flex ${customizer.direction === 'rtl' ? "justify-end" : ""} ${customizer.isCollapse ? "overflow-hidden" : "overflow-visible"}`}
                >
                    {img ? (
                        <img src={img} alt="Logo" style={{ maxWidth: "unset" }} />
                    ) : (
                        <span className="text-gray-800">{children}</span>
                    )}
                </Link>
            </div>
        </SidebarHeader>
    );
};
