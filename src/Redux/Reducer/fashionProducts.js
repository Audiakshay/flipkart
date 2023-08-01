const initState = [];

const fashionProducts = (state = initState, { type, payload }) => {
    switch (type) {
        case 'FASHION_PRODUCTS':
            
            return payload;
    
        default:
            return state;
    }
};

export default fashionProducts;