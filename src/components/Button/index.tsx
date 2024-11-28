import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ButtonPropsCustom extends ButtonProps {
    props: any;
    children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonPropsCustom> = ({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
};

export default ButtonComponent;
