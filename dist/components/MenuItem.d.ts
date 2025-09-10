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
    badgeType?: "default" | "outline" | "secondary" | "destructive";
    link?: string;
    target?: string;
    isSelected?: boolean;
    ClassName?: string;
    animation?: boolean;
}
export declare const AMMenuItem: ({ children, icon, component, badge, badgeColor, badgeTextColor, badgeContent, textFontSize, borderRadius, disabled, badgeType, link, target, isSelected, ClassName, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
