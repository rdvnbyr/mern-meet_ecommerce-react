import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { CartActions, UserActions } from '../../../actions';
import {OverlayTrigger,Popover} from 'react-bootstrap';
import {
    ShoppingCart,
    ShoppingCartOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined
} from '@material-ui/icons';

const ProductWrapper = styled.div`
    min-width: 360px;
    max-width: 380px;
    margin: 5px;
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
    transform: scale(0.95);

 }
 .cart-btn {
     position:absolute;
     bottom: 0;
     left: 0;
     padding: 0.2rem 0.4rem;
     border: none;
     font-size: 1.4rem;
     border-radius:0.5rem 0 0 0;
     transition :all 0.4s linear;
     color: #f47556;
     background: none;
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
     color: #ea1842;
     background: none;
     .fas {
        color: #ea1842;
     }
 }
 .cart-btn-wishlist:hover {
     cursor: pointer;
 }
 .cart-btn-wishlist:focus {
    outline: none;
 }
 .card-footer {
     background: transparent;
     color: #0E2453;
     font-weight: bold;
 }
`;

const CardCo = (props) => {
    const { title, price, image, _id } = props;
    const alert = useAlert();
    const dispatch = useDispatch();
    const {token, userId} = useSelector(state => state.session.access);
    const { isLogin, userWishlist, cart, isLoading, apiUrl  } = useSelector(
        (state) => ({
            isLogin: state.session.isLogin,
            userActionLoading: state.user.loading,
            userWishlist: state.user.userWishlist,
            cart: state.carts.cart,
            cartActionLoading: state.carts.loading,
            isLoading: state.carts.loading,
            apiUrl: state.apps.apiUrl
        }),
        shallowEqual
    );

    const isProductAlreadyInUserWishlist = userWishlist !== undefined ? userWishlist.find( p => p.product._id.toString() === _id) : null;

    const isProductExistInUserCart = cart !== undefined ? cart.find(cart => {
        return cart.items.find( product => product.product._id.toString() === _id)
    }) : null;

    const addproductToCart = async (productId) => {
        !isLogin ?
            alert.show(<div className="text-info text-lowercase text-capitalize">Please login before shopping</div>)
        :
            dispatch(CartActions.addProductToCartAction(token, productId, userId));
    };

    const addProductToWishlist = (id) => {
        !isLogin ?
            alert.show(<div className="text-info text-lowercase text-capitalize">Please login before add wishlist</div>)
        :
            dispatch(UserActions.addProductToWishlist(id));
    };

    

    return (
            <ProductWrapper className = "mx-auto col-md-6 col-lg-4 my-3">
                <div className = "card">
                    <div
                        className="img-container p-5"
                    >
                    <Link to ={`/details/${_id}`}>
                        <img src={ `${apiUrl}/${image}` } alt="product" className ="card-img-top"/>
                    </Link>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Popover id={`tooltip-top_id`} className="p-2">
                                {isLoading ? "Loading.." : isProductExistInUserCart ? "Already in cart" : "Add to Cart"}
                            </Popover>
                        }
                    > 
                        <button 
                            className="cart-btn"
                            onClick={() => addproductToCart(_id) }
                            disabled={isLoading}
                            >
                            {
                                isLogin && isProductExistInUserCart ?
                                <ShoppingCart style={{ fontSize: 28 }} />
                                :
                                <ShoppingCartOutlined style={{ fontSize: 28 }} />
                            }
                        </button>
                  </OverlayTrigger>
                    <button 
                        className="cart-btn-wishlist"
                        onClick={() => addProductToWishlist(_id)}
                    >
                    {
                        isLogin && isProductAlreadyInUserWishlist ? 
                        <FavoriteOutlined style={{ fontSize: 28 }} />
                        :
                        <FavoriteBorderOutlined style={{ fontSize: 28 }} />
                    }
                    </button>
                </div>
                    
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                            <div className="mb-0 mx-2">
                                {title}
                            </div>
                            <div className="mb-0 mx-2">
                                {price}
                                <span className ="mr-1"> € </span>
                            </div>
                    </div>
                </div>
            </ProductWrapper>
    );
}


export default CardCo

