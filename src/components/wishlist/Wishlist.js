import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {Link} from 'react-router-dom';
import {CartActions, UserActions} from '../../actions';
import { Card, Button } from 'react-bootstrap';
import {ReactLoadingSpinnerBubbles} from '../elements/ReactLoading/ReactLoading';
import {ReactRatingStars} from '../elements';
import './_wishlist.scss';
 

const domain = 'http://localhost:8080/';

export function Wishlist() {

    const dispatch = useDispatch();
    const {userWishlist, isLoading, userId} = useSelector(
        (state) => ({
            isLoading: state.carts.loading,
            userWishlist: state.user.userWishlist,
            userId: state.session.access.userId
        }),
        shallowEqual
    );

    React.useEffect(() => {
        dispatch(UserActions.getUserWishlist(userId));
    }, [userId, dispatch]);

    const addproductToCart = (productId) => {
        dispatch(CartActions.addProductToCartAction('token', productId, 'userId'));
    };

    return (
        <div className="container _wishlist-contain">
            {
                isLoading ? 
                    <ReactLoadingSpinnerBubbles />
                :
                userWishlist !== undefined && userWishlist.length > 0 ?
                    userWishlist.map( (item, index) => {
                        return(
                                <Card key={index} className="my-4 mx-auto wishlist-card">
                                    <Card.Body>
                                    <div className="row justify-content-around">
                                        <Card.Img style={{width: '100px'}} variant="top" src={domain + item.product.image} />
                                        <div className="column">
                                            <Card.Title>
                                                <Link to={`/details/${item.product._id}`} >
                                                    <p>{`${item.product.brand} / ${item.product.title}`}</p>
                                                </Link>
                                            </Card.Title>
                                            <Card.Text>
                                                <span className="text-muted">Price:</span>
                                                <span className="ml-3 text-danger">{item.product.price}</span>
                                            </Card.Text>
                                            <div>
                                                <span className="text-muted">Rating:</span>
                                                <ReactRatingStars
                                                    count={item.product.rating}
                                                    value={item.product.rating}
                                                    edit={false}
                                                />
                                            </div>
                                            <Card.Text>
                                                <span className="text-muted">In Stock:</span>
                                                <span className="ml-3 text-danger">{item.product.countInStock}</span>
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <button
                                                className="mx-auto mb-2 btn-block px-3"
                                                onClick={() => addproductToCart(item.product._id)}
                                            >
                                                Add Cart
                                            </button>
                                            <button
                                                className="mx-auto mb-2 btn-block px-3"
                                                onClick={() => dispatch(UserActions.addProductToWishlist(item.product._id))}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    </Card.Body>
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


