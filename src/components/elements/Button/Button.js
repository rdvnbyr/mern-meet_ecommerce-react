import React from 'react';
import './_button.scss';


export function Button({
    children,
    className,
    type,
    disabled,
    colorSubmit = false,
    colorDelete = false,
    ...props
}) {

    const color = colorSubmit ? "root-btn_button-submit" : colorDelete ? "root-btn_button-delete" : "";

    return (
        <button 
            className={`${color} root-btn_button ${className}`}
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};