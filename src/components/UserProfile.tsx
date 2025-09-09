import { LogOut } from "lucide-react";
import { SidebarFooter } from "./ui/sidebar";

interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
}

export const Profile = ({
    userName = "",
    designation = "",
    userimg = "",
    isCollapse = false,
    onLogout,
}: ProfileProps) => {
    return (
        <>
            <SidebarFooter>
                {isCollapse ? (
                    ""
                ) : (
                    <div className="flex items-center gap-3 m-5 p-4 rounded-md bg-secondary/20">
                        {/* Avatar */}
                        <img
                            src={userimg}
                            alt="profile-image"
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        {/* User Info */}
                        <div>
                            <p className="text-xl font-medium">{userName}</p>
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
