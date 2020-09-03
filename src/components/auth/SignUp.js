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


import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody} from 'mdbreact';

class SignUp extends Component {
state = {
  modal13: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
        <MDBBtn color="secondary" onClick={this.toggle(13)}>
          Sign Up
        </MDBBtn>

        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody>
              <MDBRow>
                <MDBCol md="12">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Sign up</p>

                        <div className="grey-text">
                          <MDBInput
                            label="Username"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Password"
                            icon="lock"
                            group
                            type="password"
                            validate
                          />
                          <MDBInput
                            label="Re - Password"
                            icon="exclamation-triangle"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                        </div>

                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="warning" type="submit">
                            Register
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
}

export default SignUp;
