import React from 'react';
import { useSelector, shallowEqual} from 'react-redux'
import { Card } from 'react-bootstrap';
import {ReactLoadingSpinnerBubbles} from '../../elements';
import './_review.scss';
import {ReactRatingStars} from '../../elements';
import moment from 'moment';



export function Review({
    reviews
}) {
    const { isLoading} = useSelector(
        (state) => ({
            isLoading: state.carts.loading
        }),
        shallowEqual
    );

    return (
        <div className="container _review-contain">
            {
                isLoading ? 
                    <ReactLoadingSpinnerBubbles />
                :
                reviews ?
                    reviews.map( (review, index) => {
                        return(
                                <Card key={review._id} className="my-4 mx-auto review-card">
                                    <div className="row justify-content-between py-3 px-5">
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">{review.reviewer.username}</div>
                                            <div className=" font-italic text-danger">{review.reviewer.email}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">Reviewed at:</div>
                                            <div className=" font-italic text-danger">{moment(review.updatedAt, "YYYYY-MM-DDT00:00:00.000Z").format('DD-MM-YYYY')}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div>Ratings: 
                                            <span>
                                                <ReactRatingStars
                                                    count={review.rating}
                                                    value={review.rating}
                                                    edit={false}
                                                />
                                            </span></div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <Card.Body>
                                        <Card.Title className="text-center font-weight-bold">
                                            {review.title}
                                        </Card.Title>
                                        <Card.Title className="text-center">
                                            {review.comment}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                        )
                    })
                    :
                   <div>
                    There is no old purchased cart..., Please shop
                   </div>
            }
        </div>
    )
}



