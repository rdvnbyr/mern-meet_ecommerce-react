import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {Link} from 'react-router-dom';
import {CartActions} from '../../actions';
import { Card, Button, Modal } from 'react-bootstrap';
import {ReactLoadingSpinnerBubbles} from '../elements/ReactLoading/ReactLoading';
import moment from 'moment';
import './_purchased.scss';
 


const domain = 'http://localhost:8080/';



export function Purchase() {


    const [isArchived, setIsArchived] = React.useState(false);

    const dispatch = useDispatch();
    const {purchasedCart, isLoading} = useSelector(
        (state) => ({
            purchasedCart: state.carts.purchasedCart,
            isLoading: state.carts.loading
        }),
        shallowEqual
    );

    React.useEffect(() => {
        dispatch(CartActions.getPurchasedCart());
    }, [isArchived]);

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
                isLoading ? 
                    <ReactLoadingSpinnerBubbles />
                :
                purchasedCart !== undefined && purchasedCart.length > 0 ?
                    purchasedCart.map( (cart, index) => {
                        return(
                                <Card key={cart._id} className="my-4 mx-auto puchased-card">
                                    <div className="row justify-content-around py-3 _header-div">
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Order Placed</div>
                                            <div className=" font-italic text-danger">{moment(cart.updatedAt, "YYYYY-MM-DDT00:00:00.000Z").format('DD-MM-YYYY')}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Total Price</div>
                                            <div className=" font-italic text-danger">{cart.totalPrice} €</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Dispatch To</div>
                                            <div className=" font-italic text-danger">{cart.shippingAddress.firstname + " " + cart.shippingAddress.lastname}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Order Id</div>
                                            <div className=" font-italic text-danger">{cart._id}</div>
                                        </div>
                                    </div>
                                    <hr/>
                                    {
                                        cart.items.map( (item,i) => {
                                            return(
                                                <Card.Body key={i}>
                                                <div className="row justify-content-around">
                                                    <Card.Img style={{width: '100px'}} variant="top" src={domain + item.product.image} />
                                                    <div className="column">
                                                        <Card.Title>
                                                            <Link to={`/details/${item.product._id}`} >
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
                                                            <span className="ml-3 text-danger">{item.product.price}</span>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <span className="text-muted">Quantity:</span>
                                                            <span className="ml-3 text-danger">{item.quantity}</span>
                                                        </Card.Text>
                                                    </div>
                                                    <div>
                                                        <Button
                                                            className="mx-auto mb-2 btn-block"
                                                            variant="outline-primary"
                                                            onClick={() => addproductToCart(item.product._id)}
                                                        >Buy Again</Button>
                                                            <Link className="btn btn-outline-dark mx-auto mt-2 btn-block " to={`/review-product/${item.product._id}`} >
                                                                Write a product rewiew
                                                            </Link>
                                                    </div>
                                                </div>
                                                </Card.Body>
                                            )
                                        })
                                    }
                                    <Card.Footer className="text-muted">
                                        <Button
                                            className="mr-auto"
                                            variant="outline-danger"
                                            onClick={() => archivedOrder(cart._id) }
                                        >Archive Order</Button>
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


