import React from 'react';
import './InputCo.scss';

function InputCo({ className, type, placeholder, value, onChange, name, style, ref, min, onBlur, readOnly, as }) {

    return (
            <input
                style={style}
                name={name}
                className={className} 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={ onChange }
                ref={ref}
                min={min}
                onBlur={onBlur}
                readOnly={readOnly}
            />
    )
}


export default InputCo
