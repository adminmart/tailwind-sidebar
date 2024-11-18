import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

export const Profile = React.forwardRef(
    (
        {
            userName = "",
            designation = "",
            userimg = "",
            totalWidth = "269px",
            isCollapse = false,
        },
        ref
    ) => {
        return (
            <div className='fixed bottom-0 w-full bg-white' style={{ maxWidth: totalWidth }}>
                {!isCollapse && (
                    <div className="flex items-center gap-2 m-6 p-4 rounded-lg bg-cyan-400 bg-opacity-15" >
                        <img
                            alt="User Avatar"
                            src={userimg}
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <h6 className="font-bold">{userName}</h6>
                            <p className="text-gray-600 text-sm">{designation}</p>
                        </div>

                        <div className="ml-auto">
                            <button
                                aria-label="logout"
                                className="text-blue-600 hover:bg-blue-200 rounded p-1 transition"
                                onClick={() => console.log('Logout clicked')}
                            >
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </div>
                )
                }
            </div >
        );
    }
);
