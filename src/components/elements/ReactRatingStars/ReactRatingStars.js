import React from 'react';
import ReactStars from 'react-rating-stars-component';

export function ReactRatingStars({
    count,
    onChange,
    size,// default 15px
    isHalf=true,
    emptyIcon=<i className="far fa-star"></i>,
    halfIcon=<i className="fa fa-star-half-alt"></i>,
    fullIcon=<i className="fa fa-star"></i>,
    activeColor="#ffd700",
    classNames,
    value,
    edit=true,
    a11y=true
}) {
    return(
        <ReactStars
          count={count}
          onChange={onChange}
          size={size}
          isHalf={isHalf}
          emptyIcon={emptyIcon}
          halfIcon={halfIcon}
          fullIcon={fullIcon}
          activeColor={activeColor}
          classNames={classNames}
          value={value}
          edit={edit}
        />
      );
};
