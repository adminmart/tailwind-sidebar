import { ElementType, ReactNode } from 'react';
interface MenuItemProps {
    component?: ElementType;
    children: ReactNode;
    [key: string]: any;
}
declare function Links({ component: Component, children, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export default Links;
