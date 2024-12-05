import React from "react";
import {Avatar, AvatarProps} from "@mui/material";

interface IAvatarProps extends AvatarProps {
}

const AvatarComponent: React.FC<IAvatarProps> = ({...props}) => {
    return <Avatar {...props} />
}

export default AvatarComponent;
