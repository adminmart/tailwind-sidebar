interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
    ClassName?: string;
}
export declare const AMProfile: ({ userName, designation, userimg, isCollapse, onLogout, ClassName, }: ProfileProps) => import("react/jsx-runtime").JSX.Element;
export {};
