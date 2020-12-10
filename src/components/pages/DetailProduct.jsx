import React, { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import {Button} from '../elements';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { ProductsActions, CartActions } from '../../actions';
import { useAlert } from 'react-alert';
// import { Review } from '../layout/ProductDetails/Review';
import {ProductReview} from '../layout/ProductDetails/ProductReview';
import {ReactRatingStars} from '../elements';
import '../../styles/productDetails.scss';
import { ReactLoadingSpinnerBubbles } from '../elements';



const DetailProduct = () => {
    const alert = useAlert();
    const _id = useLocation().pathname.split('/')[2];

    const dispatch = useDispatch();
    const {product,loading,isLogin,cartActionloading, apiUrl} = useSelector(
        (state) => ({
            product: state.products.product,
            loading: state.products.loading,
            isLogin: state.session.isLogin,
            cartActionloading: state.carts.loading,
            apiUrl: state.apps.apiUrl
        }),
        shallowEqual
    );
    const {token, userId} = useSelector(state => state.session.access);

    useEffect(() => {
        dispatch(ProductsActions.getProductDetails(_id));
    }, [_id, dispatch]);

    const addproductToCart = (productId) => {
        !isLogin ?
        alert.show(<div className="text-info text-lowercase text-capitalize">Please login before shopping</div>)
      :
        dispatch(CartActions.addProductToCartAction(token, productId, userId));
    };

    return(
        <div className="container py-5 _product-details-contain">
        {
            loading ? <div className="mx-auto my-auto"><ReactLoadingSpinnerBubbles /></div>
             :
             <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <img src={ `${apiUrl}/${product.image}`} className="img-fluid" alt="product"/>
                 </div>      
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text_part">
                     <h5> {`${product.brand} / ${product.title}`} </h5>
                     <p className="mt-3 mb-0 text-muted lead product-details_details"> {product.details} </p>
                     <div className="row mt-2 mb-2">
                        <div className="col-2 label-product_details">Price:</div>
                        <div className="label-value-product_details">{product.price} € </div>
                     </div>
                     <div className="row mb-2">
                        <div className="col-2 label-product_details">Stock:</div>
                        <div className="label-value-product_details">{product.countInStock}</div>
                     </div>
                     {
                        product.rating > 0 &&
                            <div className="row mb-2">
                            <div className="col-2 label-product_details">Rating:</div>
                            <div className="label-value-product_details">
                                <ReactRatingStars
                                    count={product.rating}
                                    value={product.rating}
                                    edit={false}
                                />
                            </div>
                            </div>
                     }
                     <div className="text-left">
                         <Button
                            className="my-5"
                            type="submit"
                            onClick={() => addproductToCart(product._id) }
                            children={cartActionloading ? "Loading.." : "Add Product"}
                            colorSubmit={true}
                            disabled={cartActionloading}
                         />
                     </div>
                 </div>
             </div>
        }
        {
            (product.reviews !== undefined && product.reviews.length > 0) &&
                <div className="mx-auto my-5">
                    <h4 className="text-left">Product Reviews</h4>
                    <ProductReview reviews={product.reviews}/>
                </div>
        }
        </div>
    )
};

export default DetailProduct;