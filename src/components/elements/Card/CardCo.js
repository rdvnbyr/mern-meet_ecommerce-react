import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert'


const ProductWrapper = styled.div`
.card {
    border-color:blanchedalmond;
    border-radius:5px;
    transition:all 1s linear;
    padding:10px;
}

 &:hover {
     .card{
         border:0.4rem solid rgba (0,0,0,0.2);
         box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
     }
     
     
 }
 .img-container {
    position: relative;
    overflow: hidden;
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
     border: none;
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


const CardCo = (props) => {

    const domain = 'http://localhost:8080/';
    const { title, price, image, _id } = props;
    const alert = useAlert()

    const isLogin = useSelector(state => state.session.isLogin);

    
    return (
        <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-4 my-3">
            <div className = "card">
                <div
                    className="img-container p-5"
                 >
                <Link to ={`/details/${_id}`}>
                    <img src={domain + image} alt="product" className ="card-img-top"/>
                </Link>
            
                <button 
                        className="cart-btn"
                        onClick={() => {
                            !isLogin ?
                                alert.show(<div className="text-info">BU BIR ALERT</div>)
                              :
                                console.log('clicked');
                        }}
                >
                {
                    <i className ="fas fa-cart-plus " />
                }
                {/*                         {inCart ? (
                            <p className ="text-capitalize mb-0">
                                {"in cart"}  
                            </p>
                        ) : (
                            < i className ="fas fa-cart-plus " />
                        )} */}
                </button>
            </div>
                
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <Link to ="/details" style={{color:"black"}}>
                        <h5 className="align-self-center mb-0 mx-2">
                            {title}
                        </h5>
                    </Link>
                        <h5 className="font-italic mb-0 mx-2">
                            {price}
                            <span className ="mr-1"> € </span>
                            
                        </h5>
                </div>
            </div>
        </ProductWrapper>
    );
}


export default CardCo

