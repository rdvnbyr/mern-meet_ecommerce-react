import React from 'react';
import './InputCo.scss';
import { Form } from 'react-bootstrap';

function InputCo({ classInput, classLabel, labelText, type, placeholder, value, onChange, name, ref, min, onBlur, readOnly, controlId }) {

    return (
        <Form.Group controlId={controlId}>
            <Form.Label className={classLabel}>{labelText}</Form.Label>
            <Form.Control
                name={name}
                className={classInput} 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={ onChange }
                ref={ref}
                min={min}
                onBlur={onBlur}
                readOnly={readOnly}
            />
        </Form.Group>
    );
};

export default InputCo