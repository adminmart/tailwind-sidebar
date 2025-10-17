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
    badgeType?: "default" | "secondary" | "destructive" | "outline";
    link?: string;
    target?: string;
    isSelected?: boolean;
    className?: string;
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
}
export declare const AMMenuItem: ({ children, icon, component, badge, badgeColor, badgeTextColor, badgeContent, textFontSize, borderRadius, disabled, badgeType, link, target, isSelected, className, variant, size, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
