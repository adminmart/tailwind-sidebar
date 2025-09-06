import { ElementType, ReactNode } from "react";



interface MenuItemProps {
    component?: ElementType; // Accepts any valid component (default: "a")
    children: ReactNode;
    [key: string]: any; // Allows passing additional props dynamically
}


function Links({
    component: Component = "a",
    children,
    ...props
}: MenuItemProps) {
    return (
        <Component {...props} style={{ textDecoration: "none" }} >
            {children}
        </Component>
    )
}

export default Links