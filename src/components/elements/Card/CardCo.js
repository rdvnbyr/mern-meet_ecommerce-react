import React from 'react';
import { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductWrapper = styled.div`
.card {
    border-color :transparent;
    border-radius:5px;
    transition:all 1s linear;
    padding:10px;

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
    /* width:100%;
    height:400px; */
    width: calc(100% - 30px);
    height:300px;
    box-sizing: border-box;
 }
 .card-img-top {
     transition :all 0.6s ease;
     width:100%;
     height:100%;
     background-position: center;
     background-size:cover;
     background:transparent
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
     transition :all 0.4s linear;
 }
 .img-container:hover .cart-btn {
     transform:translate(0,0);
 }
 .cart-btn:hover {
     cursor: pointer;
 }
`;
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
                        <Link to ="/details" style={{color:"black"}}>
                                <h3 className="aling-self-center mb-0 mx-2">
                                    {title}
                                </h3>
                        </Link>
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
