import React , {Fragment, useEffect , useState} from 'react'
import CartColumns from './CartColumns'
// import {ProductConsumer} from '../../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { useDispatch, useSelector} from 'react-redux'
import { CartActions } from '../../../actions'

const Cart = ({history}) => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.session.access.token);
    const userId = useSelector(state => state.session.access.userId);
    const userCart = useSelector(state => state.carts.cart);


    useEffect(() => {
        dispatch(CartActions.getCart(token, userId));
    }, [dispatch, token, userId]);

        return (
            <div style={{margin: '120px', minHeight: '100vh'}}>
                <Fragment>
                    <h2 className="text-center text-title my-5"> Your Cart</h2>
                    <CartColumns />
                    {
                        userCart !== undefined ?
                        userCart.map( (cart) => {
                            return(
                                <Fragment key={cart._id} >
                                <CartList products = {cart.items}/>
                                <CartTotals cart = {cart}/>
                                </Fragment>
                            )
                        })
                        :
                        null
                    }
                </Fragment>
                {/*<ProductConsumer>
                    { value => {
                        const {cart} = value;
                        if (cart.length > 0 ){
                            return (
                                <React.Fragment>
                                    <h2 className="text-center text-title my-5"> Your Cart</h2>
                                    <CartColumns />
                                    <CartList value = {value}/>
                                    <CartTotals value= {value} history={this.props.history} />
                                </React.Fragment>
                            )
                        }else{
                            return (
                                <h2 className="text-center text-title my-5">    Your Cart is Empty
                                </h2>
                            )
                        }
                    }}
                </ProductConsumer>*/}
            </div>
        )
    
}

export default Cart
