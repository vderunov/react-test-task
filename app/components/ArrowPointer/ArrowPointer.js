import React from 'react';
import PropTypes from 'prop-types';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArrowPointer = ( { status } ) => (
    status ? <FontAwesomeIcon className="green" icon={faArrowUp} /> :
        <FontAwesomeIcon className="red" icon={faArrowDown} />
);

ArrowPointer.propTypes = {
    status: PropTypes.number
};

export default ArrowPointer;
