import React from 'react';
import './InputCo.scss';
import { Form } from 'react-bootstrap';

function InputCo({
    field,
    classInput,
    classLabel,
    labelText,
    type="text",
    placeholder,
    readOnly,
    ...props
}) {
    return (
        <Form.Group>
            <Form.Label className={classLabel}>{labelText}</Form.Label>
            <Form.Control
                className={classInput} 
                type={type}
                placeholder={placeholder}
                readOnly={readOnly}
                {...field}
                {...props}
            />
        </Form.Group>
    );
};

export default InputCo