import React from "react";
import {Tab, TabProps} from "@mui/material";

interface ITabProps extends TabProps {
}

const TabComponent: React.FC<ITabProps> = ({...props}) => {
    return <Tab {...props}/>
}

export default TabComponent;
