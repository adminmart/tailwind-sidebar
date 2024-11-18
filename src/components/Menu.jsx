import * as React from 'react';
import { SidebarContext } from './Sidebar';

export const Menu = React.forwardRef(
    (
        {
            children,
            subHeading = 'menu',
        },
        ref
    ) => {
        const customizer = React.useContext(SidebarContext);

        return (
            <div className={`px-${customizer.isCollapse ? '2' : '6'} pt-4 `}>
                <nav ref={ref}>
                    <div className={`text-${customizer.textColor} px-0 leading-5 font-bold text-xs text-left`}>
                        {!customizer.isCollapse ? subHeading : '...'}
                    </div>
                    <ul>
                        {children}
                    </ul>
                </nav>
            </div>
        );
    }
);
