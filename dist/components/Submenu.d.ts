import * as React from "react";
type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
};
export declare function Submenu({ title, children, icon, textFontSize, disabled, borderRadius, }: SubmenuProps): import("react/jsx-runtime").JSX.Element;
export {};
