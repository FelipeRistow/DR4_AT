import React from "react";
import {Typography, TypographyProps} from "@mui/material";

interface ITypographyProps extends TypographyProps {
    children: React.ReactNode;
}

const TypographyComponent: React.FC<ITypographyProps> = ({children, ...props}) => {
    return <Typography {...props}>
        {children}
    </Typography>
}

export default TypographyComponent;
