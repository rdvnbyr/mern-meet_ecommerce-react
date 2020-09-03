// import React, { Component } from 'react'
// import CaruoselCardCo from './CarouselCardCo'
// import { weekProductData } from '../../../data';
// import { CardGroup } from 'react-bootstrap';




// class CaruoselCards extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//              category:[]
//         }
//     }
    

//     render() {
//         return (
//             <div className="container mt-3">
//                 <h1 className='text-center my-5'>WEEK'S OFFER </h1>
//                <div>                    
//                     {
//                         this.state.category.length ===0 ?
//                         (
//                             <CardGroup>
//                             {weekProductData.cards.map((item,index) =>
//                                 <CaruoselCardCo 
//                                     key={index}
//                                     {...item}
//                                 />
//                             )}
//                             </CardGroup>
//                         ) : (
//                             'Array is empty'
//                         )
                    
//                     }
//                </div>
//             </div>
//         )
//     }
// }

// export default CaruoselCards
