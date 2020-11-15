import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { CartActions } from '../../../actions';
import { Link } from 'react-router-dom'


function CartTotals({cart, history}) {
    const { shippingPrice, taxPrice, totalPrice, _id } = cart;
    
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.session.access);

    const deleteCart = (cartId) => {
        dispatch(CartActions.deleteCart(token, cartId));
    }
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <h5>
                            <span className="text-title mr-2">
                                Shipping: 
                            </span>
                            <strong className="text-danger">{shippingPrice} €</strong>
                        </h5>
                        <h5>
                            <span className="text-title mr-2">
                                tax: 
                            </span>
                            <strong className="text-danger">{taxPrice} €</strong>
                        </h5>
                        <h5>
                            <span className="text-title mr-2">
                                total: 
                            </span>
                            <strong className="text-danger">{totalPrice}  € </strong>
                        </h5>
                        <div className="mt-5">
                            <button 
                                className="btn text-uppercase px-5 mr-3 _cart-totals_btn"
                                type="button"
                                onClick={()=> deleteCart(_id)}>
                                    Delete Cart
                            </button>
                            <Link to="/checkout">
                                <button 
                                    className="btn text-uppercase px-5 _cart-totals_btn"
                                    type="button"
                                    >
                                        Proceed to Checkout
                                </button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default CartTotals