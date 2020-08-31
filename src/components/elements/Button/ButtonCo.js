import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonCo({variant, onClick, type, block, text, className}) {
    return (
        <Button
            className={className}
            variant={variant}
            onClick={onClick}
            type={type}
            block={block}
        >
        {text}
        </Button>
    )
}

export default ButtonCo
