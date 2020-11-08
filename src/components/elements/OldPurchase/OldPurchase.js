import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { CartActions } from '../../../actions';
import {Link} from 'react-router-dom'


const domain = 'http://localhost:8080/';



export function OldPurchase() {



    const dispatch = useDispatch();
    const {purchasedCart, user} = useSelector(
        (state) => ({
            purchasedCart: state.carts.purchasedCart,
            user: state.session.access.user._doc
        })
    )

    React.useEffect(() => {
        dispatch(CartActions.getPurchasedCart());
    }, []);

    console.log(purchasedCart)
    return (
        <div className="mx-auto">
            {
                purchasedCart !== undefined && purchasedCart.length > 0 ?
                    purchasedCart.map( (cart, index) => {
                        return(
                            <div key={cart._id} className="my-3 mx-auto p-5">
                                    {
                                        cart.items.map( (item,i) => {
                                            return(
                                                <div key={i}>
                                                product: 
                                                    <Link to={`/details/${item.product._id}`} >
                                                        <p>{`${item.product.brand} /${item.product.title}`}</p>
                                                    </Link>
                                                    <Link to={`/review-product/${item.product._id}`} >
                                                        review this product
                                                    </Link>
                                                    <p>price: {item.product.price}</p>
                                                </div>
                                            );
                                        })
                                    }
                                    <div>
                                        <p>shipping address:
                                        <span className="ml-3">
                                         {Object.values(cart.shippingAddress).join(", ")}
                                        </span>
                                        </p>
                                    </div>
                                    <div>
                                        <p>Total Price: {cart.totalPrice}</p>
                                    </div>
                            </div>
                        )
                    })
                    :
                    null
            }
        </div>
    )
}
