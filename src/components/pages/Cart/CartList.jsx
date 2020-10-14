import React from 'react'
import CartItem from './CartItem'


function CartList({ value }) {

  return (
    <div className="container-fluid">
       {value.map( item => {
               return <CartItem 
                              key={item._id} 
                              item={item} 
                              value={value}
                        />
           })
       }
    </div>
  )
}
export default CartList
