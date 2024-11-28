import React from "react";
import {IconButton, IconButtonProps} from "@mui/material";

interface IIconButtonProps extends IconButtonProps {
    props: any;
    children: React.ReactNode;
}

const IconButtonComponent: React.FC<IIconButtonProps> = ({children, ...props}) => {
    return <IconButton {...props}>
        {children}
    </IconButton>
}

export default IconButtonComponent;