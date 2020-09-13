import React from 'react'

function Cart() {
    return (
        <div>
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
        <img src="images/product_1.jpg" alt="" class="img-fluid" />
        </td>
        <td class="product-name">
        <h2 class="h5 text-black">Huawei P40</h2>
        </td>
        <td>1100.00</td>
        <td>
        <div class="input-group mb-3" style={{maxWidth: "120px"}}>
        <div class="input-group-prepend">
        <button class="btn btn-outline-primary js-btn-minus" type="button">−</button>
        </div>
        <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <div class="input-group-append">
        <button class="btn btn-outline-primary js-btn-plus" type="button">+</button>
        </div>
        </div>
        </td>
        <td>1100.00</td>
        <td><a href="/" class="btn btn-primary height-auto btn-sm">X</a></td>
        </tr>
        <tr>
        <td class="product-thumbnail">
        <img src="images/product_2.jpg" alt="" class="img-fluid" />
        </td>
        <td class="product-name">
        <h2 class="h5 text-black">Iphone 11</h2>
        </td>
        <td>1149.00</td>
        <td>
        <div class="input-group mb-3" style={{maxWidth: "120px"}}>
        <div class="input-group-prepend">
        <button class="btn btn-outline-primary js-btn-minus" type="button">−</button>
        </div>
        <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <div class="input-group-append">
        <button class="btn btn-outline-primary js-btn-plus" type="button">+</button>
        </div>
        </div>
        </td>
        <td>1149.00</td>
        <td><a href="/" class="btn btn-primary height-auto btn-sm">X</a></td>
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
        <strong class="text-black">2249.00</strong>
        </div>
        </div>
        <div class="row mb-5">
        <div class="col-md-6">
        <span class="text-black">Total</span>
        </div>
        <div class="col-md-6 text-right">
        <strong class="text-black">2249.00</strong>
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

export default Cart
