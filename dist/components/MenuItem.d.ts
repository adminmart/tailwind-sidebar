import { default as React } from 'react';
interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    component?: React.ElementType;
    badge?: boolean;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "filled" | "outlined";
    link?: string;
    target?: string;
    isSelected?: boolean;
}
export declare const MenuItem: ({ children, icon, component, badge, badgeColor, badgeTextColor, badgeContent, textFontSize, borderRadius, disabled, badgeType, link, target, isSelected, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
