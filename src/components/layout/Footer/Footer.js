import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <MDBFooter className="pt-0">
      <MDBContainer className="mt-5 mb-0 text-md-left">
        <MDBRow className="mt-3">
          <MDBCol lg="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>About Us</strong>
            </h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "25%" }} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, harum?
              <br></br>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem optio rerum eveniet molestiae dolore quae, deserunt laborum minus commodi accusantium, voluptatum, dignissimos odio mollitia blanditiis?
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Follow Us Online</strong>
            </h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "25%" }} />
            <div className=" mt-1 mb-5 flex-center">
            <a href="/" style={{color:'black'}}>
                <i className="fab fa-facebook-f fa-lg mr-md-4"> </i>
            </a>
            <a href="/" style={{color:'black'}}>
                <i className="fab fa-twitter fa-lg mr-md-4"> </i>
            </a>

            <a href="/" style={{color:'black'}}>
                <i className="fab fa-linkedin-in fa-lg mr-md-4"> </i>
            </a>

            <a href="/" style={{color:'black'}}>
                <i className="fab fa-instagram fa-lg mr-md-4"> </i>
            </a>

            <a href="/" style={{color:'black'}}>
                <i className="fab fa-pinterest fa-lg mr-md-4"> </i>
            </a>
            </div>
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "25%" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100%" }} />

      <div className="text-center py-0">
        <MDBContainer fluid>
         <p>&copy; This e-commerce website is made with <i className="fa fa-heart mr-1" />by MeetHub Team.</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;