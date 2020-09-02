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


import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBTooltip } from 'mdbreact';


function CardComponent (props) {
     const {image, title, price} = props;

    return (
                <MDBRow style = {{width:'33%', height:'500px' }}> 
                    <MDBCol className="m-3">
                        <MDBCard>
                            <MDBCardImage
                                cascade
                                src={image}
                                top
                                alt='product photo'
                                width= "100%"
                                height= "300vw"
                                object-fit ="cover"
                        
                            />

                            <MDBCardBody 
                                cascade className='text-center'>
                            
                            <MDBCardTitle>
                                    <strong>
                                        <a href='#!' style={{textAlign:'center',color:"black", fontWeight:'bold', margin:'15px 0 0 0'}} >{title}</a>
                                    </strong>
                            </MDBCardTitle>
                            
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong> {price} € </strong>
                                </span>

                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                        <i className='grey-text fa fa-eye mr-3' />
                                        <i>Quick Look</i>
                                    </MDBTooltip>{' '}

                                    <MDBTooltip domElement placement='top'>
                                        <i className='grey-text fa fa-heart' />
                                        <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                            </MDBCardFooter>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
     
          
        )
    }
    export default CardComponent;