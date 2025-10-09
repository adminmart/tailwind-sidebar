import { ElementType, ReactNode } from "react";

interface MenuItemProps {
    component?: ElementType;
    children: ReactNode;
    to?: string;
    href?: string;
    [key: string]: any;
}

function Links({
    component: Component = "a",
    children,
    to,
    href,
    ...props
}: MenuItemProps) {
    return (
        <Component
            {...props}
            to={to}
            href={href ?? to} // fallback href if only 'to' is provided
            style={{ textDecoration: "none" }}
        >
            {children}
        </Component>
    );
}

export default Links;
