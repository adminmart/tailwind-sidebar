import { LogOut } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
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
                    <div className={` my-3 mx-3`}>
                        <div
                            className={` py-4 px-4 bg-secondary/20 rounded-md overflow-hidden`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={userimg}
                                        alt="profile-image"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-base font-medium dark:text-white">
                                            {" "}
                                            {userName}
                                        </h3>
                                        <p className="text-xs font-normal text-muted dark:text-darklink">
                                            {" "}
                                            {designation}
                                        </p>
                                    </div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <LogOut
                                            onClick={onLogout}
                                            size={18}
                                            className=" text-primary cursor-pointer"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Logout</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )}
            </SidebarFooter>
        </>
    );
};
