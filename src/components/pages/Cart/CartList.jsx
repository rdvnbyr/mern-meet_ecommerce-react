import React, { Fragment } from 'react'
import CartItem from './CartItem'


function CartList({ products }) {
  
  return (
    <div className="container-fluid">
    {
      products.map( (product, index) => {
        return(
          <Fragment key={index}>
          {
            product.isActive !== false ? <CartItem item={product} /> : null
          }
          </Fragment>
        )
      })
    }
    </div>
  )
}
export default CartList
