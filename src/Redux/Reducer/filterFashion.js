const initState = {
    gender: '',
    rating: 0,
    minPrice: 0,
    maxPrice: 2000,
}

const filterFashion = (state = initState, { type, payload }) => {
    switch(type) {
        case 'ADD_GENDER':
            return {...state, gender: payload};
        case 'ADD_RATING':
            return {...state, rating: payload };
        case 'ADD_MIN_PRICE':
            return {...state, minPrice: payload};
        case 'ADD_MAX_PRICE':
            return {...state, maxPrice: payload};
        default:
            return state;
    }
};

export default filterFashion;