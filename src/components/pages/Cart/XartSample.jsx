import React from 'react'


function CartColumns(item, value) {
    const { id, title, image, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="container-fluid text-center d-none d-lg-block" style={{margin: '120px', minHeight: '100vh'}}>
             <div class="site-section">
                <div class="container">
                    <div class="row mb-5">
                        <form class="col-md-12" method="post">
                            <div class="site-blocks-table">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Image</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-total">Total</th>
                                            <th class="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <img src={image} alt="product" class="img-fluid" style={{ widht: "5rem", height: "5rem" }} />
                                            </td>
                                            <td class="product-name">
                                                <h2 class="h5 text-black">{title}</h2>
                                            </td>
                                            <td>{price}</td>
                                            <td>
                                                <div class="input-group mb-3" style={{maxWidth: "120px"}}>
                                                    <div class="input-group-prepend">
                                                        <button class="btn btn-outline-primary js-btn-minus" type="button" onClick={() => decrement(id)}>−</button>
                                                    </div>
                                                    <input type="text" class="form-control text-center" value={count} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-outline-primary js-btn-plus" type="button" onClick={() => increment(id)}>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{price}</td>
                                            <td><a href="/" class="btn btn-primary height-auto btn-sm" onClick={() => removeItem(id)}>X</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row mb-5">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <button class="btn btn-primary btn-sm btn-block">Update Cart</button>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-md-6 pl-5">
                            <div class="row justify-content-end">
                                <div class="col-md-7">
                                    <div class="row">
                                        <div class="col-md-12 text-right border-bottom mb-5">
                                            <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                        </div>
                                    </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <span class="text-black">Subtotal</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong class="text-black">{total}</strong>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col-md-6">
                                    <span class="text-black">Total</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong class="text-black">{total}</strong>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button class="btn btn-primary btn-lg btn-block" onclick="if (!window.__cfRLUnblockHandlers) return false; window.location='checkout.html'">Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
        
export default CartColumns
