// import React from 'react';
// import {
//   MDBContainer,
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBIcon,
//   MDBView
// } from 'mdbreact';

// function CaruoselCardCo (props) {

//     const {id,image, title ,details, price} = props;


//   return (
//     <MDBContainer>
//       <section className='text-center my-5'>

//         <MDBCarousel
//           activeItem={0}
//           length={4}
//           showControls={true}
//           showIndicators={false}
          
//           slide
//         >
//           <MDBCarouselInner>
//             <MDBCarouselItem itemId={id}> 
//             <MDBView>
//                   <img
//                     className='d-block w-25'
//                     src={image}
//                     alt=''
//                   />

//                 <h2 className='font-weight-bold'>{title}</h2>
//                 <p>
//                   <MDBIcon icon='quote-left' /> {details}
//                 </p> 
//                 <h4 className='font-weight-bold my-3'>{price} € </h4>
//                 </MDBView>
//             </MDBCarouselItem>
//           </MDBCarouselInner>
//         </MDBCarousel>
//       </section>
//     </MDBContainer>
//   );
// };

// export default CaruoselCardCo;

