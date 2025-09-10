import { LogOut } from "lucide-react";
import { SidebarFooter } from "./ui/sidebar";
import clsx from "clsx";

interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
    ClassName?: string;
}

export const AMProfile = ({
    userName = "",
    designation = "",
    userimg = "",
    isCollapse = false,
    onLogout,
    ClassName = "",

}: ProfileProps) => {
    return (
        <>
            <SidebarFooter>
                {isCollapse ? (
                    ""
                ) : (
                    <div className={clsx("flex items-center gap-3 m-5 p-4 rounded-md bg-secondary/20", ClassName)}>
                        {/* Avatar */}
                        <img
                            src={userimg}
                            alt="profile-image"
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        {/* User Info */}
                        <div>
                            <p className="text-lg font-medium">{userName}</p>
                            <p className="text-xs text-gray-400 ">{designation}</p>
                        </div>

                        {/* Logout Icon Button */}
                        <div className="ml-auto">
                            <button
                                onClick={onLogout}
                                className="p-2"
                            >
                                <LogOut
                                    size={18}
                                    className=" text-primary cursor-pointer"
                                />
                            </button>


                        </div>
                    </div>
                )}
            </SidebarFooter>
        </>
    );
};
