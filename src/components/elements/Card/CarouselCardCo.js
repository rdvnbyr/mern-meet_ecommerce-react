import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

const CarouselCardCo = (props) => {
        const { _id, image, title, price } = props;
        const domain = 'http://localhost:8080/';

        return (
                <div className = "mx-auto _carouselCard"  >
                    <Row className="_row">
                        <Col
                            className="mx-auto my-auto p-5 col-8 _imageCol"
                        >
                            <Link to ={`/details/${_id}`}>
                                <img src={ domain + image } alt={title} className ="card-img-top"/>
                            </Link>
                        </Col> 
                        <Col className="mx-auto col-4 my-auto _textCol">
                            <div>
                                <h3 className="aling-self-center mb-1 my-2">
                                    {title}
                                </h3>
                                <h5 className="font-italic mb-3 my-3">
                                    {price}
                                    <span className ="mr-1"> € </span>
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
        );
}

// class CarouselCardCo extends Component {
//     render() {
//         const {id,image, title, price } = this.props;
//         return (
//             <div>
//                 <Container className = "mx-auto col-md-6 col-lg-4 my-3">
//                     <Row>
//                         <ProductConsumer>
//                             { value => (                        
//                                 <Col
//                                     className="car_img-container mx-auto p-5"
//                                     onClick = { () => 
//                                         value.handleDetail(id)
//                                     }
//                                 >
//                                     <Link to ="/details">
//                                         <img src={image} alt="product" className ="card-img-top"/>
//                                     </Link>
//                                 </Col>)  
//                             }
//                         </ProductConsumer>
 

//                   {/* card footer */}      
//                         <Col>
//                             <div>
//                                 <h3 className="aling-self-center mb-1 my-2">
//                                     {title}
//                                 </h3>
//                                 <h5 className="font-italic mb-3 my-3">
//                                     {price}
//                                     <span className ="mr-1"> € </span>
//                                 </h5>
//                             </div>
//                             </Col>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
// }

export default CarouselCardCo;

