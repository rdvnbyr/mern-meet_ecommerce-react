import React from 'react'
import CardCo from './CardCo';
import { CardGroup } from 'react-bootstrap';
import './Card.scss'

const ProductCards = (props) => {

        return (
            <div className="container">
                    <CardGroup>
                        <CardCo
                            {...props}
                        />
                    </CardGroup>
            </div>
        )
}
export default ProductCards