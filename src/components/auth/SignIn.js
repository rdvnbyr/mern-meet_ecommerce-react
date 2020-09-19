import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { SessionActions } from '../../actions/session-actions';


const SignIn = (props) => {

    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required('required'),
        password: Yup.string().min(5, 'must be at least 5 charachters').max(8, 'must be at max 8 charachters')
    });

    const onSubmit = (values) => {
        const user = {
            email: values.email,
            password: values.password
        };
        dispatch(SessionActions.login(user));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    

    return (
        <MDBContainer>
            <MDBModal isOpen={props.modal13} toggle={props.toggle} >
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={formik.handleSubmit}>
                                        <p className="h4 text-center py-4">Sign In</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="email"
                                                value={formik.values.email}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched && formik.errors.email ? <div className="text-danger">{formik.errors.email }</div> : null}
                                            <MDBInput
                                                label="Password"
                                                icon="lock"
                                                group
                                                type="password"
                                                name="password"
                                                validate
                                                value={formik.values.password}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched && formik.errors.password ? <div className="text-danger">{formik.errors.password }</div> : null}
                                        </div>
                                        <MDBBtn color="secondary" type="submit">
                                            Forget Password ?
                                        </MDBBtn>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="warning" type="submit">
                                                Sign In
                                            </MDBBtn>
                                        </div>
                                        </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    );
};

export default SignIn;
