import React from 'react'
import {Link} from 'react-router-dom';
import PayPalCheckout from './PayPalCheckout';


function CartTotals({cart, history}) {
    const { shippingPrice, taxPrice, totalPrice } = cart;
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                            className="btn btn-outline-warning text-uppercase mb-3 px-5 mr-3"
                            type="button"
                            onClick={()=> {}}>
                                Proceed to Checkout
                            </button>
                        </Link>
                        <Link to="/">
                            <button 
                            className="btn btn-outline-warning text-uppercase mb-3 px-5"
                            type="button"
                            onClick={()=> {}}>
                                clear cart
                            </button>
                        </Link>
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
                        <PayPalCheckout 
                            total={totalPrice}
                            clearCart = {''}
                            history= {history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default CartTotals