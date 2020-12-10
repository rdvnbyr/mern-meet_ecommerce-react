import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const CarouselCardCo = (props) => {
    const { _id, image, title, price, brand } = props;
    const {apiUrl} = useSelector(state => state.apps);

    return (
            <div className = "mx-auto _carouselCard">
                <Row className="_row">
                    <Col
                        className="mx-auto my-auto p-5 col-7 _imageCol"
                    >
                        <Link to ={`/details/${_id}`}>
                            <img src={  `${apiUrl}/${image}`} alt={title} className ="card-img-top"/>
                        </Link>
                    </Col> 
                    <Col className="mx-auto col-5 my-auto _textCol">
                        <div>
                            <p className="my-2">
                                {`${brand} / ${title}`}
                            </p>
                            <div className="my-3 _price_div">
                                {price}
                                <span className ="mr-1"> € </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
    );
}

export default CarouselCardCo;