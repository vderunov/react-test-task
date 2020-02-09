import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ( { itemKey, itemValue } ) => (
    <li>
        {itemKey}: {itemValue}
    </li>
);

ListItem.propTypes = {
    itemKey: PropTypes.string,
    itemValue: PropTypes.string
};

export default ListItem;
