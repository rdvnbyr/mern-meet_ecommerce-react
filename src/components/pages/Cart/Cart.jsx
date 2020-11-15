import React , {Fragment, useEffect } from 'react'
import CartColumns from './CartColumns'
// import {ProductConsumer} from '../../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { useDispatch, useSelector} from 'react-redux'
import { CartActions } from '../../../actions'
import './_cart.scss';

const Cart = ({history}) => {

    const dispatch = useDispatch();
    const { token, userId } = useSelector(state => state.session.access);
    const { isLogin } = useSelector(state => state.session);
    const userCart = useSelector(state => state.carts.cart);

    useEffect(() => {
        isLogin && dispatch(CartActions.getCart(token, userId));
    }, [dispatch, token, userId, isLogin]);

        return (
            <div style={{margin: '120px', minHeight: '100vh'}}>
                <Fragment>
                {
                    !isLogin ?
                        <h2 className="text-center text-title my-5">Please login before shopping</h2>
                    :
                        <>
                            {
                                userCart !== undefined && userCart.length > 0 ?
                                userCart.map( (cart) => {
                                    return(
                                        <Fragment key={cart._id} >
                                            <h2 className="text-center text-title my-5"> Your Cart</h2>
                                            <CartColumns />
                                            <CartList products = {cart.items}/>
                                            <CartTotals cart = {cart}/>
                                        </Fragment>
                                    )
                                })
                                :
                                <h3 className="text-center text-title my-5">Your Cart is Empty</h3>
                            }
                        </>
                }
                </Fragment>
            </div>
        )
    
}

export default Cart
