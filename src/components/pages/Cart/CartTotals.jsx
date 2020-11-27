import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { CartActions } from '../../../actions';
import { Link } from 'react-router-dom'
import { Button } from '../../elements';


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
                        <div className="">
                            <h6 className="text-muted">
                                Shipping:
                                <span className="col-6 cartTotals-price-span">{shippingPrice} €</span>
                            </h6>
                            <h6 className="text-muted">
                                Tax Price:
                                <span className="col-6 cartTotals-price-span">{taxPrice} €</span>
                            </h6>
                            <h6 className="text-muted">
                                Total Price:
                                <span className="col-6 cartTotals-price-span">{totalPrice} €</span>
                            </h6>
                        </div>
                        <div className="mt-5">
                            <Button children="Delete Cart" colorDelete={true} onClick={()=> deleteCart(_id)} className="mr-3"/>
                            <Link to="/checkout">
                                <Button children="Proceed to checkout" colorSubmit={true}/>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default CartTotals