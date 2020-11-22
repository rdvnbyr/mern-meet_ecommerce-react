import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { CommentActions } from '../../actions';
import "react-responsive-carousel/lib/styles/carousel.css";
import logo from '../../assets/logo_transparent.png';






function About() {

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(CommentActions.getComment());
    }, [dispatch]);
   
    return (
        <div style={{marginTop: '120px', minHeight: '100vh'}}>
            <div className="my-5">
                <div className="container">
                    <div className="row" style={{margin: 'auto', maxHeight: '100vh'}}>
                        <img src="https://delivery-xpress.com/wp-content/uploads/2019/03/about-us-header-1.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row" >
                    <div className="col-12 my-5">
                        <div className="card">
                            <div style={{ display: "flex", flex: "1 1 auto"}}>
                                <div className="img-square-wrapper">
                                    <img className="col img-fluid my-5" src={logo} alt="about us"/>    
                                </div>   
                                <div className="card-body">    
                                    <h1 className="card-title p-2 m-0">WHO WE ARE</h1>
                                    <p className="card-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <a href="/" className="btn btn-dark"> Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>    
    )
}

export default About;