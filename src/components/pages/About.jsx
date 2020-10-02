import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentActions } from '../../actions';
import {CardGroup, Card} from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";


// import { Redirect } from 'react-router';
const ProductWrapper = styled.div`
.carousel{
    border:none;
}
.carousel .control-dots {
    display: none;
}
`;


function About() {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comments);
    // const isLogin = useSelector(state => state.session.isLogin);

    useEffect(() => {
        dispatch(CommentActions.getComment());
    }, [dispatch]);
   
    // if (isLogin) {
    //     return Redirect('/');
    // }
    return (
        <div style={{marginTop: '120px', minHeight: '100vh'}}>
            <div className="my-5">
                <div className="container">
                    <div className="row" style={{margin: 'auto', maxHeight: '100vh'}}>
                        <img src="https://www.alternativesolution.in/image/aboutus.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row" >
                    <div className="col-12 my-5">
                        <div className="card">
                            <div style={{ display: "flex", flex: "1 1 auto"}}>
                                <div className="img-square-wrapper">
                                    <img className="col img-fluid my-5" src="https://i.pinimg.com/originals/98/df/62/98df627b202f976dccca1fabc01e336d.png" alt="about us"/>    
                                </div>   
                                <div class="card-body">    
                                    <h1 className="card-title p-2 m-0">WHO WE ARE</h1>
                                    <p className="card-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <a href="/" className="btn btn-dark"> Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="container">
                <h1 className="text-center my-5">WHAT OUR CUSTOMERS SAY ABOUT US</h1>
                <ProductWrapper>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        {
                            comments.map( comment => {
                                return( 
                                    
                                        <CardGroup  border="dark" className="row justify-content-center"  >
                                            <Card key={comment.id} className=" col-12 mb-5 ">
                                                <Card.Body className="text-center">
                                                    <Card.Img variant="top" src="https://3z61v51uhgnmmsubi1n0uv6r-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/happy-user-experience.png" className="w-50 rounded-circle m-auto"  />
                                                        <Card.Title>
                                                            {comment.name}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {comment.body}
                                                        </Card.Text>
                                                    </Card.Body>
                                                <Card.Footer className="text-center">
                                                    <small className="text-muted">{comment.email}</small>
                                                </Card.Footer>
                                            </Card>
                                        </CardGroup>
                                    
                                    )
                                }
                            )
                        }
                    </Carousel> 
                </ProductWrapper>
            </div>
        </div>    
    )
}

export default About;