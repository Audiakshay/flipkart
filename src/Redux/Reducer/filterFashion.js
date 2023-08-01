const initState = {
    gender: '',
    rating: 5,
    price: 100,
}

const filterFashion = (state = initState, { type, payload }) => {
    switch(type) {
        case 'ADD_GENDER':
            return {...state, gender: payload};
        case 'ADD_RATING':
            return {...state, rating: payload };
        case 'ADD_PRICE':
            return {...state, price: payload};
        default:
            return state;
    }
};

export default filterFashion;