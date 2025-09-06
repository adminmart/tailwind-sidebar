import { LogOut } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip"



interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
}

export const Profile = (
    (
        {
            userName = "",
            designation = "",
            userimg = "",
            isCollapse = false,
            onLogout,
        }: ProfileProps,
    ) => {

        return (

            <>
                {isCollapse ? (
                    ""
                ) : (

                    // <div className="flex items-center gap-3 m-4 p-4 rounded-lg bg-sec dark:bg-blue-600/20">
                    //     <img
                    //         alt="User Avatar"
                    //         src={userimg}
                    //         className="w-10 h-10 rounded-full object-cover"
                    //     />

                    //     <div className="flex flex-col">
                    //         <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    //             {userName}
                    //         </span>
                    //         <span className="text-sm text-gray-600 dark:text-gray-400">
                    //             {designation}
                    //         </span>
                    //     </div>



                    //     <div className="ml-auto">
                    //         <button
                    //             onClick={onLogout}
                    //             className="text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-full p-2 transition"
                    //             aria-label="Logout"
                    //             title="Logout"
                    //         >
                    //             <Icon icon="tabler:power" className="text-blue-600 text-2xl" />
                    //         </button>
                    //     </div>
                    // </div>

                    <div className={` my-3 mx-3`}>
                        <div className={` py-4 px-4 bg-secondary/20 rounded-md overflow-hidden`}>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <img src={userimg} alt="profile-image" width={40} height={40} className="rounded-full" />
                                    <div>
                                        <h3 className="text-base font-medium dark:text-white">  {userName}</h3>
                                        <p className="text-xs font-normal text-muted dark:text-darklink" > {designation}</p>
                                    </div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <LogOut onClick={onLogout} size={18} className=" text-primary cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Logout</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )}

            </>
        );
    }
);
