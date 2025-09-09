import { default as React } from 'react';
interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    link?: string;
    component?: React.ElementType;
    badge?: boolean;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "filled" | "outlined";
    target?: string;
    isSelected?: boolean;
}
export declare const MenuItem: ({ children, icon, component, link, badge, badgeColor, badgeTextColor, badgeContent, textFontSize, borderRadius, disabled, isSelected, badgeType, target, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
