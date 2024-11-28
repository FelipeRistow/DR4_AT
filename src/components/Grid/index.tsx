import React from "react";
import {Grid2 as Grid, Grid2Props as GridProps} from "@mui/material";

interface IGridProps extends GridProps {
    props: any;
    children: React.ReactNode;
}

const GridComponent: React.FC<IGridProps> = ({children, ...props}) => {
    return <Grid {...props}>
        {children}
    </Grid>
}

export default GridComponent;