
import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import "./CarouselCard.scss";
import { Container, Row, Col } from 'react-bootstrap';


class CarouselCardCo extends Component {
    render() {
        const {image, title, details, price, inCart } =this.props;
        return (
            <div>
                <Container className = "mx-auto col-md-6 col-lg-4 my-3">
                    <Row>
                    <Col
                        className="img-container my-auto"
                        onClick = {() => console.log ("you clicked me on the image container")}>

                        <Link to ="/details">
                            <img src={image} alt="product"/>
                        </Link>
                        <button className="cart-btn" disable={inCart? true : false }
                                onClick={() => {console.log ('added to the cart');
                        }}>
                            {inCart ? (
                            <p className ="text-capitalize mb-0" disabled>
                            {" "}
                            in cart
                            </p>
                           ) : (
                             < i className ="fas fa-cart-plus " />
                           )}
                         </button>
                         </Col>
                    {/* card footer */}
                    <Col>
                      <div>
                        <h3 className="aling-self-center mb-1 my-2">
                        {title}
                        </h3>
                        <p className=" mb-0 my-2">
                        {details}
                        </p>
                        <h5 className="font-italic mb-3 my-3">
                            {price}
                            <span className ="mr-1"> € </span>
                        </h5>
                      </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CarouselCardCo;

// // import React from 'react';
// // import {
// //   MDBContainer,
// //   MDBCarousel,
// //   MDBCarouselInner,
// //   MDBCarouselItem,
// //   MDBIcon,
// //   MDBView
// // } from 'mdbreact';

// // function CaruoselCardCo (props) {

// //     const {id,image, title ,details, price} = props;


// //   return (
// //     <MDBContainer>
// //       <section className='text-center my-1'>
// //         <MDBCarousel
// //           activeItem={0}
// //           length={4}
// //           showControls={false}
// //           showIndicators={false}
// //           slide
// //         >
// //           <MDBCarouselInner>
// //             <MDBCarouselItem itemId={id}>
// //             <MDBView>
// //                   <img
// //                     src={image}
// //                     alt='product'
// //                   />

// //                 <h2 className='font-weight-bold mt-5'>{title}</h2>
// //                 <p>
// //                   <MDBIcon icon='quote-left' /> {details}
// //                 </p>
// //                 <h4 className='font-weight-bold my-3'>{price} € </h4>
// //                 </MDBView>
// //             </MDBCarouselItem>
// //           </MDBCarouselInner>
// //         </MDBCarousel>
// //       </section>
// //     </MDBContainer>
// //   );
// // };

// // export default CaruoselCardCo;


// // //     import React from "react";
// // //     import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon} from "mdbreact";

// // //     function CarouselCardCo  (props) {
// // //       const {image, title ,details, price} = props;

// // //       return (
// // //           <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
// // //             <MDBCardImage cascade top src={image} waves />
// // //             <MDBCardBody cascade className="text-center">
// // //               <MDBCardTitle>
// // //                 <a href="#!"><strong>{title}</strong></a>
// // //               </MDBCardTitle>
// // //               <MDBCardText>
// // //                 {details}
// // //               </MDBCardText>
// // //               <MDBCardFooter>
// // //                 <span className="float-left">{price} $</span>
// // //                 <span className="float-right">
// // //                   <MDBTooltip placement="top">
// // //                     <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
// // //                         <MDBIcon icon="eye"/>
// // //                     </MDBBtn>
// // //                     <div>Quick Look</div>
// // //                   </MDBTooltip>
// // //                   <MDBTooltip placement="top">
// // //                     <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
// // //                       <MDBIcon icon="heart"/>
// // //                     </MDBBtn>
// // //                     <div>Added to Wishlist</div>
// // //                   </MDBTooltip>
// // //                 </span>
// // //               </MDBCardFooter>
// // //             </MDBCardBody>
// // //           </MDBCard>
// // //       );

// // // }

// // // export default CarouselCardCo



// import React from 'react';
// import {
//   MDBContainer,
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBIcon,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText
// } from 'mdbreact';

// function CaruoselCardCo (props) {

//     const {id,image, title ,details, price} = props;


//   return (
//     <MDBContainer>
//       <section className='text-center '>
//         <MDBCarousel
//           activeItem={1}
//           length={4}
//           showControls={true}
//           showIndicators={false}
//           slide
//               >
//           <MDBCarouselInner>
//             <MDBRow>
//             <MDBCarouselItem itemId={id}>
//             <MDBCol>
//             <MDBCard className="my-1">
//                   <MDBCardImage
//                     className="img-fluid mt-3"
//                     src={image}
//                     alt='product'
//                   />
//                   <MDBCardBody>
//                 <MDBCardTitle className='font-weight-bold mt-5'>{title}</MDBCardTitle>
//                 <MDBCardText>
//                   <MDBIcon icon='quote-left' /> {details}
//                 </MDBCardText>
//                 <MDBCardText className='font-weight-bold my-3'>{price} € </MDBCardText>
//                 </MDBCardBody>
//                 </MDBCard>
//                 </MDBCol>
//             </MDBCarouselItem>
//             </MDBRow>
//           </MDBCarouselInner>
//         </MDBCarousel>
//       </section>
//     </MDBContainer>
//   );
// };

// export default CaruoselCardCo;


// //     import React from "react";
// //     import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon} from "mdbreact";

// //     function CarouselCardCo  (props) {
// //       const {image, title ,details, price} = props;

// //       return (
// //           <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
// //             <MDBCardImage cascade top src={image} waves />
// //             <MDBCardBody cascade className="text-center">
// //               <MDBCardTitle>
// //                 <a href="#!"><strong>{title}</strong></a>
// //               </MDBCardTitle>
// //               <MDBCardText>
// //                 {details}
// //               </MDBCardText>
// //               <MDBCardFooter>
// //                 <span className="float-left">{price} $</span>
// //                 <span className="float-right">
// //                   <MDBTooltip placement="top">
// //                     <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
// //                         <MDBIcon icon="eye"/>
// //                     </MDBBtn>
// //                     <div>Quick Look</div>
// //                   </MDBTooltip>
// //                   <MDBTooltip placement="top">
// //                     <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
// //                       <MDBIcon icon="heart"/>
// //                     </MDBBtn>
// //                     <div>Added to Wishlist</div>
// //                   </MDBTooltip>
// //                 </span>
// //               </MDBCardFooter>
// //             </MDBCardBody>
// //           </MDBCard>
// //       );

// // }

// // export default CarouselCardCo
