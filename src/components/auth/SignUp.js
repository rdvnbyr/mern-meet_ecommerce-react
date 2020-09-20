// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

// const Signup = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <form>
//                 <p className="h4 text-center py-4">Sign up</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Username"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                   label="Password"
//                   icon="lock"
//                   group
//                   type="password"
//                   validate
//                 />
//                   <MDBInput
//                     label="Re - Password"
//                     icon="exclamation-triangle"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />

//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn color="elegant" type="submit">
//                     Register
//                   </MDBBtn>
//                 </div>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Signup;


import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody} from 'mdbreact';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { SessionActions } from '../../actions/session-actions';


const SignUp= (props) => {
  const dispatch = useDispatch();

    const initialValues = {
        username : '',
        email: '',
        password: '',
        passwordConfirm: '',
    };

    
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;

    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
      email: Yup.string()
        .lowercase()
        .email('Must be a valid email!')
        .required('Required!'),
      password: Yup.string()
        .matches(lowercaseRegex, 'one lowercase required!')
        .matches(uppercaseRegex, 'one uppercase required!')
        .matches(numericRegex, 'one number required!')
        .min(8, 'Minimum 8 characters required!')
        .required('Required!'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must be the same!')
        .required('Required!'),
    });

    const onSubmit = (values) => {
      const user = {
          username:values.username,
          email: values.email,
          password: values.password,
          status: "client"
      };
      dispatch(SessionActions.register(user));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });


  return (
    <MDBContainer>
        <MDBModal isOpen={props.modal14} toggle={props.toggle14}>
          <MDBModalBody>
              <MDBRow>
                <MDBCol>
                  <MDBCard>
                    <MDBCardBody>
                      <form onSubmit={formik.handleSubmit}>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            label="Username"
                            icon="user"
                            name="username"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          {formik.touched && formik.errors.username ? <div className="text-danger">{formik.errors.username }</div> : null}
                          <MDBInput
                            label="Email"
                            icon="envelope"
                            name="email"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          {formik.touched && formik.errors.email ? <div className="text-danger">{formik.errors.email }</div> : null}
                          <MDBInput
                            label="Password"
                            icon="lock"
                            name="password"
                            group
                            type="password"
                            validate
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          {formik.touched && formik.errors.password ? <div className="text-danger">{formik.errors.password }</div> : null}
                          <MDBInput
                            label="Password Confirm"
                            icon="exclamation-triangle"
                            name="passwordConfirm"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                            value={formik.values.passwordConfirm}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          {formik.touched && formik.errors.passwordConfirm ? <div className="text-danger">{formik.errors.passwordConfirm }</div> : null}
                        </div>
                        <div className="text-center py-4 mt-3">
                        <MDBBtn color="warning" type="submit">
                              Sign Up
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
  }


export default SignUp;
