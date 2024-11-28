import React from "react";
import {Tabs, TabsProps} from "@mui/material";

interface ITabsProps extends TabsProps {
    props: any;
    children: React.ReactNode;
}

const TabsComponent: React.FC<ITabsProps> = ({children, ...props}) => {
    return <Tabs {...props}>
        {children}
    </Tabs>
}

export default TabsComponent;