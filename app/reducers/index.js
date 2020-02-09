const stockTicker = ( state = {}, action ) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default stockTicker;
