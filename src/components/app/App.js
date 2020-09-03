import React from 'react';
import InputCo from '../elements/Input/InputCo';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCo from '../elements/Button/ButtonCo';
import FooterPage from '../layout/Footer/Footer';
import Cards from '../elements/Card/Cards'
import Page404 from '../pages/Page404';
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn';





function App() {
  return (
        <div>
            <SignUp />
            <SignIn />
          

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

            
            <Cards />

            <FooterPage />

            <Page404/>

            
        </div>


  );
}

export default App;
