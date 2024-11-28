import React from 'react';
import { Button as BotaoMUI, ButtonProps } from '@mui/material';

interface ButtonPropsCustom extends ButtonProps {
    loading?: boolean;
}

const Button: React.FC<ButtonPropsCustom> = ({ loading, children, ...props }) => {
    return (
        <BotaoMUI {...props} disabled={loading || props.disabled}>
            {loading ? 'Carregando...' : children}
        </BotaoMUI>
    );
};

export default Button;
