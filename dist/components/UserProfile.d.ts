interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
    className?: string;
}
export declare const Profile: ({ userName, designation, userimg, isCollapse, onLogout, className, }: ProfileProps) => import("react/jsx-runtime").JSX.Element;
export {};
