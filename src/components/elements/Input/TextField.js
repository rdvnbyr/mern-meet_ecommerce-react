import React from 'react';
import TextField from '@material-ui/core/TextField';

export function InputTextField({
    field,
    form: {touched, errors} ,
    required= false,
    id,
    fullWidth,
    autoComplete="given-name",
    label,
    ...props
}) {
    return (
        <>
            <TextField
                required={required}
                id={id}
                label={label}
                fullWidth={fullWidth}
                autoComplete={autoComplete}
                {...field}
                {...props}
            />
            <>{touched[field.name] && errors[field.name] ? <p className="text-danger">{errors[field.name]}</p> : null}</>
        </>
    )
};
