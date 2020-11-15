import React, {useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { CartActions, UserActions } from '../../../actions';
import {ReactLoadingSpinnerBubbles} from '../index';



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
    transform: scale(1.1);

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
     color: rgba(5,84,94,1);
     background: none;
 }
 .img-container:hover .cart-btn {
     transform:translate(0,0);
 }
 .cart-btn:hover {
     cursor: pointer;
 }
 .cart-btn-wishlist {
     position:absolute;
     top: 0px;
     left: 0px;
     padding: 0.2rem 0.4rem;
     border: none;
     font-size: 1.4rem;
     border-radius:0.5rem 0 0 0;
     /* transform:translate(100%,100%);
     transition :all 0.4s linear; */
     color: rgba(5,84,94,1);
     background: none;
 }
 /* .img-container:hover .cart-btn-wishlist {
     transform:translate(0,0);
 } */
 .cart-btn-wishlist:hover {
     cursor: pointer;
 }
 .card-footer {
     background: transparent;
     h5 {
        color: darkgray;
     }
 }
`;

const domain = 'http://localhost:8080/';

const CardCo = (props) => {

    const { title, price, image, _id } = props;
    const alert = useAlert();
    const dispatch = useDispatch();
    const {token, userId} = useSelector(state => state.session.access);
    const { isLogin, loading, userWishlist } = useSelector(
        (state) => ({
            isLogin: state.session.isLogin,
            loading: state.user.loading,
            userWishlist: state.user.userWishlist
        }),
        shallowEqual
    );

    const isProductAlreadyInUserWishlist = userWishlist !== undefined ? userWishlist.find( p => p.product._id.toString() === _id) : null;

    const addproductToCart = async (productId) => {
        !isLogin ?
            alert.show(<div className="text-info text-lowercase text-capitalize">Please login before shopping</div>)
        :
            dispatch(CartActions.addProductToCartAction(token, productId, userId));
    };

    const addroductToWishlist = (id) => {
        !isLogin ?
            alert.show(<div className="text-info text-lowercase text-capitalize">Please login before add wishlist</div>)
        :
            dispatch(UserActions.addProductToWishlist(id));
    };
    return (
        <>
        {
            loading ? 
                <ReactLoadingSpinnerBubbles />
            :
            <ProductWrapper className = "mx-auto col-md-6 col-lg-4 my-3">
                <div className = "card">
                    <div
                        className="img-container p-5"
                    >
                    <Link to ={`/details/${_id}`}>
                        <img src={domain + image} alt="product" className ="card-img-top"/>
                    </Link>
                    <button 
                            className="cart-btn"
                            onClick={() => addproductToCart(_id) }
                    >
                    {
                        <i className ="fas fa-cart-plus " />
                    }
                    </button>
                    <button 
                        className="cart-btn-wishlist"
                        onClick={() => addroductToWishlist(_id)}
                    >
                    {
                        isLogin && isProductAlreadyInUserWishlist ? 
                        <i className ="fas fa-heart" />
                        :
                        <i className ="far fa-heart" />
                    }
                    </button>
                </div>
                    
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                            <h5 className="align-self-center mb-0 mx-2">
                                {title}
                            </h5>
                            <h5 className="font-italic mb-0 mx-2">
                                {price}
                                <span className ="mr-1"> € </span>
                            </h5>
                    </div>
                </div>
            </ProductWrapper>
        }
        </>
    );
}


export default CardCo

