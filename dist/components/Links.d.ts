import { ElementType, ReactNode } from 'react';
interface MenuItemProps {
    component?: ElementType;
    children: ReactNode;
    to?: string;
    href?: string;
    [key: string]: any;
}
declare function Links({ component: Component, children, to, href, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export default Links;
