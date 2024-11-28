import React from "react";
import {Snackbar, SnackbarProps} from "@mui/material";

interface ISnackbarProps extends SnackbarProps {
    props: any;
}

const SnackbarComponent: React.FC<ISnackbarProps> = ({...props}) => {
    return <Snackbar {...props}/>
}

export default SnackbarComponent;