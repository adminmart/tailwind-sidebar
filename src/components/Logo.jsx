// // import React from "react";

// // export const Logo = ({ href = "/", src, alt = "Logo", className = "" }) => {
// //     return (
// //         <a href={href} className={` cursor-pointer ${className}`}>
// //             <img
// //                 src={src}
// //                 alt={alt}
// //                 className="w-full h-auto max-h-9 object-contain"
// //                 loading="lazy"
// //                 draggable={true}
// //             />
// //         </a>
// //     );
// // };


// // components/Logo.js
// import React from "react";

// export const Logo = ({ isCollapse, href = "/", src, alt = "Logo" }) => {
//     return (

//         // <div className="px-6 flex items-center overflow-hidden min-h-16">
//         //     <a
//         //         href={href}
//         //         className={`flex items-center ${isCollapse ? "overflow-hidden w-[40px]" : "overflow-visible w-auto"
//         //             } whitespace-nowrap text-2xl  my-1 transition-all duration-300`}
//         //     >
//         //         <img
//         //             src={src}
//         //             alt={alt}

//         //             // className="h-auto max-h-16 mr-2"
//         //             className={`h-auto mr-2 transition-all duration-300 ${isCollapse ? "w-10" : "w-auto"
//         //                 }`}
//         //         />
//         //     </a>
//         // </div>

//         // <div
//         //     className={`flex items-center transition-all duration-300 ${isCollapse ? "w-[48px] pl-2 overflow-hidden " : "w-auto"
//         //         }`}
//         // >
//         //     <a href={href} className="flex items-center">
//         //         <div
//         //             className="h-10 overflow-hidden"
//         //             style={{
//         //                 width: isCollapse ? "40px" : "auto",
//         //             }}
//         //         >
//         //             <img
//         //                 src={src}
//         //                 alt={alt}
//         //                 className={`h-7 object-left transition-all duration-300 ${isCollapse ? "object-cover w-[160px]" : "object-contain w-auto"}`}

//         //             />
//         //         </div>
//         //     </a>
//         // </div>
//         <a href={href} className="flex items-center">
//             <img
//                 src={src}
//                 alt={alt}
//                 className={`transition-all duration-300 ${isCollapse ? "w-30" : "w-40"
//                     } h-auto object-contain`}
//             />
//         </a>

//     );
// };



import React from "react";
import { SidebarContext } from "./Sidebar";


export const Logo = React.forwardRef(
    (
        {
            children,
            img = "https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg",
            href = "/",
            component
        },
        ref
    ) => {

        const customizer = React.useContext(SidebarContext);

        return (
            <a
                href={href} component={component}
                className={`flex items-center ${customizer.isCollapse ? "overflow-hidden" : "overflow-visible"
                    } whitespace-nowrap text-2xl px-6 py-4 my-1 transition-all duration-300`}
            >
                {img ? (
                    <img
                        src={img}
                        alt="Logo"
                        className="h-auto max-h-16 mr-2"
                    />
                ) : (
                    <span className="text-gray-800">{children}</span>
                )}
            </a>
        );
    }
);