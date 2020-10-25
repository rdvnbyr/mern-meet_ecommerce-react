import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions, CartActions } from '../../actions';



const DetailProduct = () => {

    const _id = useLocation().pathname.split('/')[2];
    const domain = 'http://localhost:8080/';

    const dispatch = useDispatch();
    const { product, loading } = useSelector(state => state.products);
    const {isLogin} = useSelector(state => state.session);
    const {token, userId} = useSelector(state => state.session.access);

    useEffect(() => {
        dispatch(ProductsActions.getProductDetails(_id));
    }, [_id, dispatch]);

    const addproductToCart = (productId) => {
        !isLogin ?
        alert.show(<div className="text-info text-lowercase text-capitalize">Please login before shopping</div>)
      :
        dispatch(CartActions.addProductToCartAction(token, productId, userId));
    }

    return(
        <div className="container py-5" style={{margin: '120px', minHeight: '100vh'}}>
        {
            loading ? <div>LOADING....</div>
             :
             <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <img src={domain + product.image} className="img-fluid" alt="product"/>
                 </div>      
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <h2> {product.title} </h2>
                     <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> {'' } </h4>
                     <h4><strong> Price: {product.price}
                                 <span className ="mr-1"> € </span> 
                         </strong> 
                     </h4>
                     <p className=" mt-3 mb-0 text-muted lead"> {product.details} </p>
                     <div>
                         <Link to="/shopping" className="text-decoration-none">
                             <Button
                                 className="mx-auto my-5"
                                 type="submit"
                                 variant="contained"
                                 color="dark"     
                             >
                                 Back to Products
                             </Button>
                         </Link>
                         <Button
                             className="ml-5 my-5"
                             type="submit"
                             variant="contained" color="dark"
                             onClick={() => addproductToCart(product._id) }
                         >
                         Add Product
                         </Button>
                     </div>
                 </div>
             </div>
        }
                
        </div>
    )

}

// class DetailProduct extends Component {
//     render() {
//         return (
//             <ProductConsumer>
//             {
//                 value => {
//                   const {
//                       id, 
//                       category, 
//                       image, 
//                       details, 
//                       price, 
//                       title, 
//                       inCart
//                     } = value.detailProduct;
//                   return (
//                       <div className="container py-5" style={{margin: '120px', minHeight: '100vh'}}>
//                             {/* product info */}
//                                 <div className="row">
//                                     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
//                                         <img src={image} className="img-fluid" alt="product"/>
//                                     </div>
//                             {/* product text */}        
//                                     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
//                                         <h2> {title} </h2>
//                                         <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> {category } </h4>
//                                         <h4><strong> Price: {price}
//                                                     <span className ="mr-1"> € </span> 
//                                             </strong> 
//                                         </h4>
//                                         <p className=" mt-3 mb-0 text-muted lead"> {details} </p>
//                             {/* buttons */}
//                                         <div>
//                                             <Link to="/shopping">
//                                                 <Button
//                                                     className="mx-auto my-5"
//                                                     type="submit"
//                                                     variant="contained"
//                                                     color="dark"     
//                                                 >
//                                                     Back to Products
//                                                 </Button>
//                                             </Link>
//                                             <Button
//                                                 className="ml-5 my-5"
//                                                 type="submit"
//                                                 variant="contained" color="dark"
//                                                 disabled = {inCart ? true : false}
//                                                 onClick={() => {
//                                                     value.addToCart(id);
//                                                     value.openModal(id);
//                                                 } }
//                                             >
//                                                 {inCart ? 'inCart': 'Add to Cart'}
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </div>

//                       </div>
//                   )
//                 }
//             }
                
            
//             </ProductConsumer>
            
//         );
//     }
// }

export default DetailProduct;