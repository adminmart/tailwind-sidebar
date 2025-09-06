import React from "react";
import { SidebarContext } from "./Sidebar";
import Link from "./Links";

type LogoProps = {
    children?: React.ReactNode;
    img?: string;
    href?: string;
    component?: React.ElementType;
};

export const Logo = ({
    children,
    img = "https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg",
    href = "/",
    component,
}: LogoProps) => {
    const customizer = React.useContext(SidebarContext);

    return (
        <div
            className={`min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1 px-5 py-2  overflow-ellipsis ${customizer.direction === "rtl" ? ' rtl:scale-x-[-1]' : ''}`}
        >
            <Link
                href={href}
                component={component}
                to={href}
                className={`w-[40px] flex ${customizer.isCollapse ? "overflow-hidden" : "overflow-visible"
                    }`}
            >
                {img ? (
                    <img src={img} alt="Logo" style={{ maxWidth: "unset" }} />
                ) : (
                    <span className="text-gray-800">{children}</span>
                )}
            </Link>
        </div>
    );
};
