import React from 'react';
import InputCo from '../elements/Input/InputCo';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCo from '../elements/Button/ButtonCo';

function App() {
  return (
    <div>
      <Form className="p-3 w-50 bg-light shadow-lg mx-auto mt-3 border border-dark rounded">
        <h4 className="text-center text-primary">Dummy Form</h4>
        <InputCo 
          placeholder= 'Enter..'
          labelText="Email"
          controlId="email_login_input"
        />
        <InputCo 
          placeholder= 'Enter..'
          labelText="Password"
          controlId="password_register_input"
        />
        <ButtonCo
          text='Button'
          block={true}
          variant="outline-primary"
        />
      </Form>
    </div>
  );
}

export default App;
