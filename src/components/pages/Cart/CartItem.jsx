import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { CartActions } from '../../../actions';


function CartItem({ item }) {
    const { title, image, price, _id, brand} = item.product;
    const cart = useSelector(state => state.carts.cart[0]);
    const access = useSelector(state => state.session.access);
    const {apiUrl} = useSelector(state => state.apps);
    const token = access.token;
    const cartId = cart._id;
    const userId = access.userId;

    const dispatch = useDispatch();

    const qtyDispatcher = qty => dispatch(CartActions.changeQuantity(token, cartId, userId, _id, qty));

    const removeProduct = () => dispatch(CartActions.removeProductFromCart(token, cartId, userId, _id, 'removeProduct'));

    return (
      <div className="row mt-2 mb-4 text-capitalize text-center">
        <div className="col-10 m-auto col-lg-2">
          <Link to={`/details/${_id}`}>
            <img
              src={  `${apiUrl}/${image}`}
              style={{ widht: "5rem", height: "5rem" }}
              className="img-fluid"
              alt="product"
            />
          </Link>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <span className="d-lg-none">product:</span>
          {`${brand} / ${title}`}
        </div>
        <div className="col-10 m-auto col-lg-2">
          <span className="d-lg-none">price :</span>
          {price} €
        </div>
        <div className="col-10 m-auto col-lg-2">
          <div className="d-flex justify-content-center">
            <div>
              <span className="btn btn-light mx-1"
                onClick={() => qtyDispatcher(item.quantity - 1)}> -
              </span>
              <span className="btn btn-light mx-1">{item.quantity}</span>
              <span className="btn btn-light mx-1"
                onClick={() => qtyDispatcher( item.quantity + 1)}> +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 m-auto col-lg-2">
        <span className="d-lg-none">Total :</span>
          <strong>{price * item.quantity} €</strong>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <div className="cart-icon" >
            <button onClick={() => removeProduct()} className="btn btn-outline-danger">
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </div>
    );
  }
export default CartItem
