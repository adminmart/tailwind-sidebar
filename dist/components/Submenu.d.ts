import * as React from "react";
type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
    ClassName?: string;
    openClassName?: string;
};
export declare function AMSubmenu({ title, children, icon, textFontSize, disabled, borderRadius, ClassName, openClassName }: SubmenuProps): import("react/jsx-runtime").JSX.Element;
export {};
