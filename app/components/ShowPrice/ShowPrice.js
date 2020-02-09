import React from 'react';
import PropTypes from 'prop-types';

const ShowPrice = ( { price } ) => (
    <h3>{price}</h3>
);

ShowPrice.propTypes = {
    price: PropTypes.string
};

export default ShowPrice;
