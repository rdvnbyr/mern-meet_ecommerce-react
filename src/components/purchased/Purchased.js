import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {Link} from 'react-router-dom';
import {CartActions} from '../../actions';
import { Card } from 'react-bootstrap';
import { Button} from '../elements';
import moment from 'moment';
import './_purchased.scss';


export function Purchase() {

    const [isArchived, setIsArchived] = React.useState(false);

    const dispatch = useDispatch();
    const {purchasedCart, isLoading, apiUrl} = useSelector(
        (state) => ({
            purchasedCart: state.carts.purchasedCart,
            isLoading: state.carts.loading,
            apiUrl: state.apps.apiUrl
        }),
        shallowEqual
    );

    React.useEffect(() => {
        dispatch(CartActions.getPurchasedCart());
    }, [dispatch, isArchived]);

    const archivedOrder = (id) => {
        dispatch(CartActions.archivedOrder(id));
        setIsArchived(true)
    };

    const addproductToCart = (productId) => {
        dispatch(CartActions.addProductToCartAction('token', productId, 'userId'));
    };

    return (
        <div className="container _purchased-contain">
            {
                purchasedCart !== undefined && purchasedCart.length > 0 ?
                    purchasedCart.map( (cart, index) => {
                        return(
                                <Card key={cart._id} className="my-4 mx-auto puchased-card">
                                    <div className="row justify-content-around py-3">
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Order Placed</div>
                                            <div className="subTitle">{moment(cart.updatedAt, "YYYYY-MM-DDT00:00:00.000Z").format('DD-MM-YYYY')}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Total Price</div>
                                            <div className="subTitle">{cart.totalPrice} €</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Dispatch To</div>
                                            <div className="subTitle">{cart.shippingAddress.firstname + " " + cart.shippingAddress.lastname}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Order Id</div>
                                            <div className="subTitle">{cart._id}</div>
                                        </div>
                                    </div>
                                    <hr/>
                                    {
                                        cart.items.map( (item,i) => {
                                            return(
                                                <Card.Body key={i}>
                                                <div className="row justify-content-around">
                                                    <Card.Img style={{width: '100px'}} variant="top" src={apiUrl + item.product.image} />
                                                    <div className="column">
                                                        <Card.Title>
                                                            <Link to={`/details/${item.product._id}`} className="card-title-purchased">
                                                                <p>{`${item.product.brand} /${item.product.title}`}</p>
                                                            </Link>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            <span className="text-muted">Shipping Address:</span>
                                                            <span className="ml-3">
                                                            {Object.values(cart.shippingAddress).join(", ")}
                                                            </span>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <span className="text-muted">Price:</span>
                                                            <span className="ml-3">{item.product.price} €</span>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <span className="text-muted">Quantity:</span>
                                                            <span className="ml-3">{item.quantity}</span>
                                                        </Card.Text>
                                                    </div>
                                                    <div className="column justify-content-center">
                                                        <div className="mb-2">
                                                            <Button
                                                                className="btn-block"
                                                                onClick={() => addproductToCart(item.product._id)}
                                                                children={ isLoading ? "Loading.." : "Buy Again"}
                                                                colorSubmit={true}
                                                                disabled={isLoading}
                                                            />
                                                        </div>
                                                        <div className="mt-4">
                                                            <Link className="review-link-purchased" to={`/review-product/${item.product._id}`} >
                                                                Write review
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Card.Body>
                                            )
                                        })
                                    }
                                    <Card.Footer className="text-muted">
                                        <button
                                            className="mr-auto btn btn-outline-danger"
                                            onClick={() => archivedOrder(cart._id) }
                                        >Archive Order</button>
                                    </Card.Footer>
                                </Card>
                        )
                    })
                    :
                   <div>
                    There is no old purchased cart..., Please shop
                   </div>
            }
        </div>
    )
}


