import * as React from "react";
type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
    ClassName?: string;
};
export declare function AMSubmenu({ title, children, icon, textFontSize, disabled, borderRadius, ClassName }: SubmenuProps): import("react/jsx-runtime").JSX.Element;
export {};
