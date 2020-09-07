// import React from 'react';
// import {Card} from "react-bootstrap";
// import './Card.scss'


// function CardComponent (props) {
//     const {image, title, price} = props
//     return (
//         <div style = {{width:'33%', height:'420px', borderRadius:'20px' }}>
//            <div className="m-3">
//                 <Card>
//                     <Card.Img src = {image} style={{width: "100%",
//                                                      height: "17vw",
//                                                     objectFit :"cover"}}/>
//                 </Card>
//                 <h2 style={{textAlign:'center', fontWeight:'bold', margin:'15px 0 0 0'}}>{title}</h2>
//                 <h4 style={{textAlign:'center', color:'grey', }}>{price} € </h4>
//            </div>
//         </div>
//     )
// }

// export default CardComponent;


// import React from 'react';
// import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBTooltip } from 'mdbreact';


// function CardCo (props) {
//      const {image, title, price} = props;

//     return (
//                 <MDBRow style = {{width:'33%', height:'500px' }}> 
//                     <MDBCol className="m-3">
//                         <MDBCard>
//                             <MDBCardImage
//                                 cascade
//                                 src={image}
//                                 top
//                                 alt='product photo'
//                                 width= "100%"
//                                 height= "300vw"
//                                 object-fit ="cover"
                        
//                             />

//                             <MDBCardBody 
//                                 cascade className='text-center'>
                            
//                             <MDBCardTitle>
//                                     <strong>
//                                         <a href='#!' style={{textAlign:'center',color:"black", fontWeight:'bold', margin:'15px 0 0 0'}} >{title}</a>
//                                     </strong>
//                             </MDBCardTitle>
                            
//                             <MDBCardFooter className='px-1'>
//                                 <span className='float-left font-weight-bold'>
//                                     <strong> {price} € </strong>
//                                 </span>

//                                 <span className='float-right'>
//                                     <MDBTooltip domElement placement='top'>
//                                         <i className='grey-text fa fa-eye mr-3' />
//                                         <i>Quick Look</i>
//                                     </MDBTooltip>{' '}

//                                     <MDBTooltip domElement placement='top'>
//                                         <i className='grey-text fa fa-heart' />
//                                         <span>Add to Whishlist</span>
//                                     </MDBTooltip>
//                                 </span>
//                             </MDBCardFooter>

//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
     
          
//         )
//     }
//     export default CardCo;

import React from 'react';
import { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";


class CardCo extends Component {
    render() {
        const {image, title, price, inCart } =this.props;
        return (
            <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className = "card">
                    <div
                    className="img-container p-5"
                    onClick = {() => console.log ("you clicked me on the image container")}>
                    
                        <Link to ="/details">
                            <img src={image} alt="product" className ="card-img-top"/>
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
                        
                       
                    </div>
                    {/* card footer */}
                    <div className="card-gf d-flex justify-content-between">
                            <h3 className="aling-self-center mb-0 mx-2">
                            {title}
                            </h3>
                            <h5 className="text-blue font-italic mb-0 mx-2">
                                <span className ="mr-1"> € </span>
                                {price}
                            </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default CardCo;

const ProductWrapper = styled.div`
.card {
    border-color :transparent;
    border-radius:5px;
    transition:all 1s linear;
}
.card-footer {
    background :transparent;
    border-top :transparent;
    transition :all 1s linear;
}
 &:hover {
     .card{
         border:0.4rem solid rgba (0,0,0,0.2);
         box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
     }
     .card-footer {
        background: rgba (247,247,247);
     }
 }
 .img-container {
    position: relative;
    overflow: hidden; 
 }
 .card-img-top {
     transition :all 1s linear;
 }

 .img-container:hover .card-img-top {
    transform: scale(1.2);
 }
 .cart-btn {
     position:absolute;
     bottom: 0;
     right: 0;
     padding: 0.2rem 0.4rem;
     /* background: var(--lightblue); */
     border: none;
     /* color: var(--mainWhite); */
     font-size: 1.4rem;
     border-radius:0.5rem 0 0 0;
     transform:translate(100%,100%);
     transition :all 1s linear;
 } 
 .img-container:hover .cart-btn {
     transform:translate(0,0);
 }
 .cart-btn:hover {
     /* color: var(--mainBlue); */
     cursor: pointer;
 }
`;