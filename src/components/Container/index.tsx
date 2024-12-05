import React from "react";
import {ContainerProps, Container} from "@mui/material";

interface ICardProps extends ContainerProps {
    children: React.ReactNode;
}

const ContainerComponent: React.FC<ICardProps> = ({children, ...props}) => {
    return <Container {...props}>
        {children}
    </Container>
}

export default ContainerComponent;
