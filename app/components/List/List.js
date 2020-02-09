import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const List = ( { data } ) => (
    <ul>
        {data.map(( item, index ) =>
            <ListItem key={index} itemKey={item[0]} itemValue={item[1]} />
        )}
    </ul>
);

List.propTypes = {
    data: PropTypes.array
};

export default List;
