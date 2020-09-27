import React from 'react'
import CheckOut from '../layout/CheckOut/CheckOut'
import Cart from './Cart'

function Shoping() {
    return (
        <div style={{margin: '120px', minHeight: '100vh'}}>
            <CheckOut />
            <Cart/>
        </div>
    )
}

export default Shoping
