import React from "react";
import {DrawerProps, Drawer} from "@mui/material";

interface IDrawerProps extends DrawerProps {
    children: React.ReactNode;
}

const DrawerComponent: React.FC<IDrawerProps> = ({children, ...props}) => {
    return <Drawer {...props}>
        {children}
    </Drawer>
}

export default DrawerComponent;
