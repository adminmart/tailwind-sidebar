import React from "react";
import { SidebarContext } from "./Sidebar";

export const Logo = React.forwardRef(
    (
        {
            children,
            img = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png",
        },
        ref
    ) => {
        const customizer = React.useContext(SidebarContext);

        return (
            <a
                href="/"
                className={`flex items-center ${customizer.isCollapse ? "overflow-hidden" : "overflow-visible"
                    } whitespace-nowrap text-2xl px-6 py-4 my-1 transition-all duration-300`}
            >
                {img ? (
                    <img
                        src={img}
                        alt="Logo"
                        className="h-auto max-h-16 mr-2"
                    />
                ) : (
                    <span className="text-gray-800">{children}</span>
                )}
            </a>
        );
    }
);
